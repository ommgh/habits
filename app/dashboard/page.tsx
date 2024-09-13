"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bell,
  BarChart2,
  CheckCircle,
  PlusCircle,
  Settings,
  TrendingUp,
} from "lucide-react";

export default function HabitDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [newHabit, setNewHabit] = useState("");

  const habits = [
    { name: "Exercise", streak: 5, progress: 70, category: "Health" },
    {
      name: "Read",
      streak: 12,
      progress: 85,
      category: "Personal Development",
    },
    { name: "Meditate", streak: 3, progress: 40, category: "Mindfulness" },
  ];

  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <aside className="w-64 bg-black shadow-md border-r">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-white">Habituals</h1>
        </div>
        <nav className="mt-4">
          {["dashboard", "goals", "analytics", "settings"].map((tab) => (
            <button
              key={tab}
              className={`w-full text-left p-4 flex items-center text-white space-x-2 ${
                activeTab === tab ? "bg-gray-800" : "hover:bg-gray-800"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "dashboard" && (
                <CheckCircle className="w-5 h-5 text-white" />
              )}
              {tab === "goals" && <TrendingUp className="w-5 h-5 text-white" />}
              {tab === "analytics" && (
                <BarChart2 className="w-5 h-5 text-white" />
              )}
              {tab === "settings" && <Settings className="w-5 h-5 text-" />}
              <span className="capitalize">{tab}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Dashboard</h2>

          {/* Goal Setting */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Set a New Goal
            </h3>
            <div className="flex space-x-4">
              <Input
                type="text"
                placeholder="Enter a new habit"
                value={newHabit}
                onChange={(e) => setNewHabit(e.target.value)}
                className="flex-grow"
              />
              <Button
                onClick={() => {
                  /* Add habit logic */
                }}
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                Add Habit
              </Button>
            </div>
          </section>

          {/* Habit Tracking */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Your Habits
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {habits.map((habit) => (
                <Card key={habit.name}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-white">
                      {habit.name}
                    </CardTitle>
                    <div className="text-xs text-black bg-gray-100 px-2 py-1 rounded">
                      {habit.category}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {habit.streak} day streak
                    </div>
                    <Progress value={habit.progress} className="mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">
                      {habit.progress}% complete this week
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Analytics */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Analytics</h3>
            <Card>
              <CardContent className="p-6">
                <div className="h-[200px] flex items-end justify-between">
                  {[40, 60, 30, 70, 50, 80, 45].map((value, index) => (
                    <div
                      key={index}
                      className="bg-purple-600 w-8"
                      style={{ height: `${value}%` }}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-sm text-white">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Reminders and Warnings */}
          <section>
            <h3 className="text-xl font-semibold text-white mb-4">
              Reminders & Warnings
            </h3>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4 text-red-600">
                  <Bell className="w-6 h-6" />
                  <p>
                    Don't forget to meditate today! Your 3-day streak is at
                    risk.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
