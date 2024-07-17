"use client"
import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export function YearsChart({averanges}) {


  const chartData = Object.keys(averanges).map(year => ({
  month: year,
  averange: parseFloat(averanges[year])
}));


const chartConfig = {
  averange: {
    label: "Average",
    color: "hsl(var(--chart-1))",
    bg: "hsl(var(--chart-text))",
  },
} 

  return (
    <Card className="bg-transparent mx-auto w-full lg:max-w-6xl border-none">
      <CardHeader>
        <CardTitle className="text-3xl text-white">Movie Ratings 2005 - 2024</CardTitle>
        <CardDescription className="text-white">*ratings based on top 20 movies for each year</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[500px] w-full  bg-transparent">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={2}
              tickFormatter={(value) => value.slice(0, 0)}
              hideLabel
              
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
              
            />
            <Line
              dataKey="averange"
              type="natural"
              stroke="var(--color-averange)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-averange)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="text-white"
                fontSize={18}
                stroke="var(--bg-averange)"
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}
