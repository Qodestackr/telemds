import {
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,

  Settings,
  Settings2,
  Share,
  // SquareTerminal,
  // SquareUser,
  Triangle,
  Turtle,
  Rotate3D,
  Wrench,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function ETriage() {
  return (
    <div className="grid h-screen w-full pl-[53px]">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl text-blue-400 font-satoshi italic">AfyaMed E-Triage | Vital Signs</h1>
          <Drawer>
            <DrawerTrigger asChild>
              {/* <Button variant="ghost" size="icon" className="md:hidden">
                <Settings className="size-4" />
                <span className="sr-only">Triage</span>
              </Button> */}
            </DrawerTrigger>
            <DrawerContent className="max-h-[80vh]">
              <DrawerHeader>
                <DrawerTitle>AfyaMed AI</DrawerTitle>
                <DrawerDescription>
                  We will use an efficient AI model to get you there
                </DrawerDescription>
              </DrawerHeader>
              <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    AfyaMed E-Triage
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="">Choose Triage Category.</Label>
                    <Select>
                      <SelectTrigger
                        id="afyamed_e_triage_category"
                        className="items-start [&_[data-description]]:hidden"
                      >
                        <SelectValue placeholder="Select a Triage Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="genesis">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Rabbit className="size-5" />
                            <div className="grid gap-0.5">
                              <p>
                                Neural{" "}
                                <span className="font-medium text-foreground">
                                  Genesis
                                </span>
                              </p>
                              <p className="text-xs" data-description>
                                Our fastest model for general use cases.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="explorer">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Bird className="size-5" />
                            <div className="grid gap-0.5">
                              <p>
                                Neural{" "}
                                <span className="font-medium text-foreground">
                                  Explorer
                                </span>
                              </p>
                              <p className="text-xs" data-description>
                                Performance and speed for efficiency.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="quantum">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Turtle className="size-5" />
                            <div className="grid gap-0.5">
                              <p>
                                Neural{" "}
                                <span className="font-medium text-foreground">
                                  Quantum
                                </span>
                              </p>
                              <p className="text-xs" data-description>
                                The most powerful model for complex
                                computations.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="temperature">Temperature</Label>
                    <Input id="temperature" type="number" placeholder="0.4" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="top-p">Height</Label>
                    <Input id="top-p" type="number" placeholder="0.7" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="top-k">Weight</Label>
                    <Input id="top-k" type="number" placeholder="0.0" />
                  </div>
                </fieldset>
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Messages
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="role">Role</Label>
                    <Select defaultValue="system">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="system">System</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="assistant">Assistant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="content">Key Vital Signs</Label>
                    <Textarea id="content" placeholder="Describe key vital signs." />
                  </div>
                </fieldset>
              </form>
            </DrawerContent>
          </Drawer>
          <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
          >
            <Share className="size-3.5" />
            Share
          </Button>
        </header>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative hidden flex-col items-start gap-8 md:flex">
            <form className="grid w-full items-start gap-6">
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-semibold text-green-600">
                  We Get You Started
                </legend>
                <div className="grid gap-3">
                  <Label htmlFor="model">Choose Triage Category</Label>
                  <Select>
                    <SelectTrigger
                      id="triage_category"
                      className="items-start [&_[data-description]]:hidden"
                    >
                      <SelectValue placeholder="Choose Triage Category." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic_triage">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Rabbit className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Basic{" "}
                              <span className="font-medium text-foreground">
                                Triage
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              This category focuses on providing quick assistance for non-urgent cases and routine assessments.                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="intermediate_triage">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Bird className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Intermediate{" "}
                              <span className="font-medium text-foreground">
                                Triage
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Thorough assessment and recommendations tailored to your needs. Recommendations for moderate symptoms or semi-urgent conditions.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="quantum">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Turtle className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Advanced {" "}
                              <span className="font-medium text-foreground">
                                Triage
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Immediate assistance required. A healthcare professional will contact you shortly to provide urgent help.                           </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="pediatric">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Turtle className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Pediatric {" "}
                              <span className="font-medium text-foreground">
                                Triage
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Specialized care for our young patients. Our team is here to address children's health concerns.                            </p>
                          </div>
                        </div>

                      </SelectItem>
                      <SelectItem value="geriatric">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Turtle className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Geriatric {" "}
                              <span className="font-medium text-foreground">
                                Triage
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Comprehensive support for our elderly patients. Addressing age-related health concerns with care.
                            </p>
                          </div>
                        </div>
                      </SelectItem>

                      <SelectItem value="emergency">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Turtle className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Emergency {" "}
                              <span className="font-medium text-foreground">
                                Triage
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Urgent assistance required. Please stay by your device; a healthcare professional will contact you immediately to provide help.
                            </p>
                          </div>
                        </div>
                      </SelectItem>

                      <SelectItem value="telehealth">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Turtle className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Telehealth {" "}
                              <span className="font-medium text-foreground">
                                Triage
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Virtual consultations tailored to your needs. A Virtual Hospital professional will chip in in a moment...
                            </p>
                          </div>
                        </div>
                      </SelectItem>

                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="height">Height</Label>
                    <Input id="height" type="number" placeholder="0.7" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="weight">Weight</Label>
                    <Input id="weight" type="number" placeholder="0.0" />
                  </div>
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="temperature">Temperature</Label>
                  <Input id="temperature" type="number" placeholder="0.4" />
                </div>
                {/*  */}
                <div className="grid gap-3">
                  <Label htmlFor="blood_pressure">Blood Pressure</Label>
                  <Input id="blood_pressure" type="text" placeholder="e.g 120/80 mmHg" />
                </div>
                {/*  */}

              </fieldset>
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Messages
                </legend>
                <div className="grid gap-3">
                  <Label htmlFor="role">Select Who will Serve you.</Label>
                  <Select defaultValue="nurse">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nurse">Nurse</SelectItem>
                      <SelectItem value="user">Doctor</SelectItem>
                      <SelectItem value="assistant">Specialist</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="content">Key Vital Signs</Label>
                  <Textarea
                    id="content"
                    placeholder="Describe Key Vital Signs..."
                    className="min-h-[9.5rem]"
                  />
                </div>
              </fieldset>
            </form>
          </div>

          <div className="relative flex h-full flex-col rounded-xl bg-muted/100 p-4 lg:col-span-2">
            <Badge className="absolute right-2 top-3 bg-indigo-800 z-50 flex justify-center items-center text-white w-1/3 p-5 hover:bg-indigo-800 hover:cursor-pointer">
              Real Time E-Triage Output
            </Badge>

            <div className="flex-1 bg-slate-700 text-white w-full rounded my-3 relative">
              <img src="/hospital/triage-pro-max.png" alt="E-Triage" className="w-full h-full rounded-md" />
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Rotate3D className="w-20 h-20 animate-spin hover:animate-none hover:cursor-pointer text-green-200" />
              </div>
            </div>

            <form className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">

              <Label htmlFor="message" className="text-blue-400 font-semibold my-2 mx-2">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Enter patient triage information here..."
                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
              />
              <div className="flex items-center p-3 pt-0">
                <Button variant="ghost" size="icon">
                  <Paperclip className="size-4" />
                  <span className="sr-only">Attach file</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Mic className="size-4" />
                  <span className="sr-only">Use Microphone</span>
                </Button>
                <Button
                  size="sm" className="ml-auto gap-1.5 h-14">
                  Save Triage Data
                  <CornerDownLeft className="size-3.5" />
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
