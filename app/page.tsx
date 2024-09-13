"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, BarChart2, Bell, Menu } from "lucide-react";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="bg-black shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <CheckCircle className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-white">
                Habituals
              </span>
            </div>
            <div className="hidden md:flex items-center">
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">About</Button>
              <Button className="ml-4">Sign Up</Button>
            </div>
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Button variant="ghost" className="w-full justify-start">
                Features
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Pricing
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                About
              </Button>
              <Button className="w-full mt-2">Sign Up</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white sm:text-6xl md:text-7xl">
          Build Better Habits,
          <br />
          <span className="text-purple-600">Achieve Your Goals</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto">
          Habituals helps you create and maintain positive habits, track your
          progress, and achieve your personal goals with powerful insights and
          motivating reminders.
        </p>
        <div className="mt-8 sm:mt-10 flex justify-center">
          <Button
            size="lg"
            className="text-lg px-6 sm:px-8 py-3"
            onClick={() => router.push("/dashboard")}
          >
            Start Your Journey
          </Button>
        </div>
      </header>

      {/* Feature Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">
          Powerful Features to Build Lasting Habits
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              icon: CheckCircle,
              title: "Goal Setting",
              description: "Set and track personalized goals",
            },
            {
              icon: TrendingUp,
              title: "Progress Tracking",
              description: "Monitor your daily and weekly progress",
            },
            {
              icon: BarChart2,
              title: "Insightful Analytics",
              description: "Gain valuable insights from your data",
            },
            {
              icon: Bell,
              title: "Smart Reminders",
              description: "Stay on track with timely notifications",
            },
          ].map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <feature.icon className="h-12 w-12 text-purple-600 mx-auto" />
                <h3 className="mt-4 text-lg sm:text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Fitness Enthusiast",
                quote:
                  "HabitHub has completely transformed my workout routine. I've never been so consistent!",
              },
              {
                name: "Sarah Lee",
                role: "Productivity Expert",
                quote:
                  "The insights I get from HabitHub have helped me optimize my daily routine and achieve more.",
              },
              {
                name: "Mike Chen",
                role: "Aspiring Writer",
                quote:
                  "Thanks to HabitHub, I've written 500 words every day for the past 3 months. It's a game-changer!",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="text-sm sm:text-base text-white italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-purple-600">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-white">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-700 text-white py-12 sm:py-20">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">
            Ready to Transform Your Habits?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-10">
            Join thousands of users who are already building better habits and
            achieving their goals with HabitHub.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-64 bg-white text-gray-900"
            />
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-purple-700 hover:bg-gray-100"
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Product
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-purple-600"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-purple-600"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-purple-600"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-purple-600"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-purple-600"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-purple-600"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Resources
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-purple-600"
                  >
                    Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-purple-600"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-purple-600"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-purple-600"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-purple-600"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 border-t border-gray-200 pt-8">
            <p className="text-center text-sm text-gray-500">
              &copy; 2023 HabitHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
