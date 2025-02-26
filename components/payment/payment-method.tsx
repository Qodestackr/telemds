/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sD0hTUrWSIV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AppointmentPaymentMethod() {
  return (
    <Card className="container mx-auto w-2/3 my-7">
      <CardHeader>
        <CardTitle>AfyaMed Billing Selection</CardTitle>
        <CardDescription>
          Select your billing period, payment method, and enter a promo code if available.
        </CardDescription>
      </CardHeader>
      <div className="flex gap-8 justify-center items-center">
        {/*  */}
        <Label
          htmlFor="card"
          className="cursor-pointer flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="mb-3 h-6 w-6"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <path d="M2 10h20" />
          </svg>
          Card
        </Label>
        {/*  */}
        <Label
          htmlFor="Insurance Plan"
          className="cursor-pointer flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
        >
          <Image src={'/insurance-001.png'} alt="paypa afyamed payment" width={34} height={48} />
          <div className="flex flex-col justify-center items-center gap-1">
            <span>Insurance</span>
            <span>Plan</span>
          </div>
        </Label>
        {/*  */}
        <Label
          htmlFor="Mpesa"
          className=" cursor-pointer flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
        >
          <Image src={'/512px-M-PESA_LOGO-01.svg.png'} alt="paypa afyamed payment" width={34} height={34} />
          Mpesa
        </Label>

        {/*  */}
      </div>

      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="name"
          >Name</Label>
          <Input id="name" placeholder="First Last" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="number"
          >Card number</Label>
          <Input id="number" placeholder="" />
        </div>
      </CardContent>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="billingPeriod">Billing Period</Label>
          <Select>
            <SelectTrigger aria-label="Billing Period" id="billingPeriod">
              <SelectValue placeholder="Select Billing Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="annual">Annual</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="paymentMethod">Payment Method</Label>
          <Select>
            <SelectTrigger aria-label="Payment Method" id="paymentMethod">
              <SelectValue placeholder="Select Payment Method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="creditCard">Credit Card</SelectItem>
              <SelectItem value="debitCard">Debit Card</SelectItem>
              <SelectItem value="paypal">Paypal</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="promoCode">Promo Code</Label>
          <Input id="promoCode" placeholder="Enter your promo code" />
        </div>
      </CardContent>
      {/*  */}
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-2">
            <Label //htmlFor="month"
            >Expires</Label>
            <Select>
              <SelectTrigger id="month">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">January</SelectItem>
                <SelectItem value="2">February</SelectItem>
                <SelectItem value="3">March</SelectItem>
                <SelectItem value="4">April</SelectItem>
                <SelectItem value="5">May</SelectItem>
                <SelectItem value="6">June</SelectItem>
                <SelectItem value="7">July</SelectItem>
                <SelectItem value="8">August</SelectItem>
                <SelectItem value="9">September</SelectItem>
                <SelectItem value="10">October</SelectItem>
                <SelectItem value="11">November</SelectItem>
                <SelectItem value="12">December</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label /// htmlFor="year"
            >Year</Label>
            <Select>
              <SelectTrigger id="year">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => (
                  <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                    {new Date().getFullYear() + i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label //htmlFor="cvc"
            >CVC</Label>
            <Input id="cvc" placeholder="CVC" />
          </div>
        </div>
      </CardContent>
      {/*  */}
      <CardFooter>
        <Link href={'/dashboard/meet'}>
          <Button className="ml-auto">Submit</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

