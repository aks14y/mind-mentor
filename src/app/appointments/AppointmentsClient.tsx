"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DatePicker } from "@/components/ui/date-picker";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SectionHeader from "@/components/ui/section-header";
import WaveDivider from "@/components/ui/wave-divider";
import { useToast } from "@/hooks/use-toast";

interface Appointment {
  id: string;
  date: string; // ISO date
  time: string; // HH:mm
  type: string;
  notes?: string;
}

export default function AppointmentsClient() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [form, setForm] = useState({
    date: "",
    time: "",
    type: "Consultation",
    notes: "",
  });

  const loadAppointments = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/appointments", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setAppointments(data.appointments || []);
    } catch (e) {
      console.error("loadAppointments error", e);
      toast({
        title: "Failed to load",
        description: "Could not load appointments",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createAppointment = async () => {
    if (!form.date || !form.time || !form.type) {
      toast({
        title: "Please complete all fields",
        description: "All fields are required",
      });
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to create");
      setForm({ date: "", time: "", type: "Consultation", notes: "" });
      await loadAppointments();
      toast({
        title: "Appointment scheduled",
        description: "Your appointment has been scheduled successfully",
      });
    } catch (e) {
      console.error("createAppointment error", e);
      toast({
        title: "Failed to create appointment",
        description: "Please try again",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white py-12">
        <div className="max-w-full mx-auto px-4 md:px-24">
          <SectionHeader
            eyebrow="Scheduling"
            title="Appointments"
            subtitle="Schedule and review your therapy appointments"
          />
        </div>
      </div>
      <WaveDivider
        className="text-semantic-primary"
        variant="gradient"
        animate
      />
      <div className="max-w-5xl mx-auto px-4 md:px-24 py-8">
        <div className="flex flex-col space-y-8">
          {/* Create Appointment */}
          <Card className="rounded-xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <h2 className="text-xl font-semibold text-cardHeader">
                  New Appointment
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <DatePicker
                      value={form.date}
                      onChange={(iso) => setForm({ ...form, date: iso })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Time</Label>
                    <Select
                      value={form.time}
                      onValueChange={(value) =>
                        setForm({ ...form, time: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 24 * 2 }).map((_, i) => {
                          const h = String(Math.floor(i / 2)).padStart(2, "0");
                          const m = i % 2 === 0 ? "00" : "30";
                          const v = `${h}:${m}`;
                          return (
                            <SelectItem key={v} value={v}>
                              {v}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Type</Label>
                    <Select
                      value={form.type}
                      onValueChange={(value) =>
                        setForm({ ...form, type: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Consultation">
                          Consultation
                        </SelectItem>
                        <SelectItem value="Individual Therapy">
                          Individual Therapy
                        </SelectItem>
                        <SelectItem value="Group Session">
                          Group Session
                        </SelectItem>
                        <SelectItem value="Follow-up">Follow-up</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Notes</Label>
                  <Textarea
                    value={form.notes}
                    onChange={(e) =>
                      setForm({ ...form, notes: e.target.value })
                    }
                    placeholder="Any context you want to share"
                  />
                </div>
                <Button
                  className="bg-semantic-secondary text-white hover:opacity-90 w-fit"
                  onClick={createAppointment}
                  disabled={loading}
                >
                  {loading ? "Scheduling..." : "Schedule Appointment"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* List Appointments */}
          <Card className="rounded-xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <h2 className="text-xl font-semibold text-cardHeader">
                  Your Appointments
                </h2>
                <div className="border-t border-gray-200 pt-4">
                  {appointments.length === 0 ? (
                    <p className="text-semantic-body">No appointments yet.</p>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Time</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Notes</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {appointments.map((a) => (
                          <TableRow key={a.id}>
                            <TableCell>{a.date}</TableCell>
                            <TableCell>{a.time}</TableCell>
                            <TableCell>
                              <Badge className="bg-semantic-primary/10 text-semantic-primary">
                                {a.type}
                              </Badge>
                            </TableCell>
                            <TableCell>{a.notes || "-"}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
