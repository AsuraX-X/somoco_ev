"use client";
import { Plus } from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";

const Specifications = () => {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);
  const [e, setE] = useState(false);
  const [f, setF] = useState(false);
  const [g, setG] = useState(false);
  const [h, setH] = useState(false);
  const [i, setI] = useState(false);
  const [j, setJ] = useState(false);
  const [k, setK] = useState(false);
  const [l, setL] = useState(false);

  return (
    <div>
      <h1 className="font-family-cera-stencil text-3xl sm:text-6xl font-bold text-center mb-5 text-primary">
        Specifications
      </h1>

      <div className="flex flex-col divide-y-2 divide-white justify-center items-center max-w-4xl mx-auto">
        <div className="w-full">
          <div>
            <h2 className="font-family-cera-stencil flex items-center justify-between py-2 text-white bg-primary px-4 text-2xl sm:text-4xl">
              Basic
              <motion.button
                animate={{ rotate: a ? 225 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => setA(!a)}
                className="cursor-pointer"
              >
                <Plus size={35} />
              </motion.button>
            </h2>
          </div>
          <motion.ul
            initial={{ height: 0, paddingBlock: 0 }}
            animate={{ height: a ? "auto" : 0, paddingBlock: 8 }}
            className="w-full overflow-hidden text-base sm:text-xl flex flex-col gap-1 divide-y-1 divide-black"
          >
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">
                L×W×H <span className="font-family-cera-stencil">(</span>mm
                <span className="font-family-cera-stencil">)</span>
              </p>{" "}
              <p>
                3780×1715×15<span className="font-family-cera-stencil">4</span>0
              </p>
            </li>
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">
                Wheelbase <span className="font-family-cera-stencil">(</span>mm
                <span className="font-family-cera-stencil">)</span>
              </p>
              <p>2500</p>
            </li>
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">
                Track width front
                <span className="font-family-cera-stencil">/</span>rear{" "}
                <span className="font-family-cera-stencil">(</span>mm
                <span className="font-family-cera-stencil">)</span>
              </p>
              <p>1500</p>
            </li>
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">
                Min. turning radius{" "}
                <span className="font-family-cera-stencil">(</span>m
                <span className="font-family-cera-stencil">)</span>
              </p>
              <p>4.95</p>
            </li>
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">Tire specifications</p>
              <p>
                165<span className="font-family-cera-stencil">/</span>65 R15{" "}
                <span className="font-family-cera-stencil">|</span> 175
                <span className="font-family-cera-stencil">/</span>55 R16
              </p>
            </li>
          </motion.ul>
        </div>
        <div className="w-full">
          <div>
            <h2 className="font-family-cera-stencil flex items-center justify-between py-2 text-white bg-primary px-4 text-2xl sm:text-4xl">
              Performance
              <motion.button
                animate={{ rotate: b ? 225 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => setB(!b)}
                className="cursor-pointer"
              >
                <Plus size={35} />
              </motion.button>
            </h2>
          </div>
          <motion.ul
            initial={{ height: 0, paddingBlock: 0 }}
            animate={{ height: b ? "auto" : 0, paddingBlock: 8 }}
            className="w-full overflow-hidden text-base sm:text-xl flex flex-col gap-1 divide-y-1 divide-black"
          >
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">Power motor</p>
              <p>Permanent Magnet Synchronous Motor</p>
            </li>
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">
                Motor max. power{" "}
                <span className="font-family-cera-stencil">(</span>kW
                <span className="font-family-cera-stencil">)</span>
              </p>
              <p>55</p>
            </li>
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">
                Motor max. torque{" "}
                <span className="font-family-cera-stencil">(</span>N.m
                <span className="font-family-cera-stencil">)</span>
              </p>
              <p>135</p>
            </li>
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">
                0<span className="font-family-cera-stencil">-</span>50km/h
                acceleration time{" "}
                <span className="font-family-cera-stencil">(</span>s
                <span className="font-family-cera-stencil">)</span>
              </p>
              <p>
                <span className="font-family-cera-stencil">4</span>.9
              </p>
            </li>
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">
                CLTC driving range{" "}
                <span className="font-family-cera-stencil">(</span>km
                <span className="font-family-cera-stencil">)</span>
              </p>
              <p>
                305 <span className="font-family-cera-stencil">-</span>{" "}
                <span className="font-family-cera-stencil">4</span>05
              </p>
            </li>
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">
                Power battery capacity{" "}
                <span className="font-family-cera-stencil">(</span>kWh
                <span className="font-family-cera-stencil">)</span>
              </p>
              <p>
                30.08 <span className="font-family-cera-stencil">-</span> 38.88
              </p>
            </li>
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">
                Max. power of A/C charging{" "}
                <span className="font-family-cera-stencil">(</span>kW
                <span className="font-family-cera-stencil">)</span>{" "}
                <span className="font-family-cera-stencil">(</span>at room
                temperature<span className="font-family-cera-stencil">)</span>
              </p>
              <p>6.6</p>
            </li>
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">
                Max. power of D/C charging{" "}
                <span className="font-family-cera-stencil">(</span>kW
                <span className="font-family-cera-stencil">)</span>{" "}
                <span className="font-family-cera-stencil">(</span>at room
                temperature<span className="font-family-cera-stencil">)</span>
              </p>
              <p>
                30 <span className="font-family-cera-stencil">-</span>{" "}
                <span className="font-family-cera-stencil">4</span>0
              </p>
            </li>
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">
                D/C charging time{" "}
                <span className="font-family-cera-stencil">(</span>min
                <span className="font-family-cera-stencil">)</span>{" "}
                <span className="font-family-cera-stencil">(</span>at room
                temperature, SOC 30%{" "}
                <span className="font-family-cera-stencil">-</span>80%
                <span className="font-family-cera-stencil">)</span>
              </p>
              <p>30</p>
            </li>
          </motion.ul>
        </div>
        <div className="w-full">
          <div>
            <h2 className="font-family-cera-stencil flex items-center justify-between py-2 text-white bg-primary px-4 text-2xl sm:text-4xl">
              Braking and Suspension
              <motion.button
                animate={{ rotate: c ? 225 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => setC(!c)}
                className="cursor-pointer"
              >
                <Plus size={35} />
              </motion.button>
            </h2>
          </div>
          <motion.ul
            initial={{ height: 0, paddingBlock: 0 }}
            animate={{ height: c ? "auto" : 0, paddingBlock: 8 }}
            className="w-full overflow-hidden text-base sm:text-xl flex flex-col gap-1 divide-y-1 divide-black"
          >
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">Front brake</p>
              <p>Vented Disc</p>
            </li>
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">Rear brake</p>
              <p>Disc</p>
            </li>
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">Parking brake</p>
              <p>Electronic Parking</p>
            </li>
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">Power steering</p>
              <p>Electronic Assistance</p>
            </li>
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">Front suspension</p>
              <p>MacPherson Strut</p>
            </li>
            <li className="py-2 px-4 flex justify-between w-full">
              <p className="max-w-1/2">Rear suspension</p>
              <p>
                Twist<span className="font-family-cera-stencil">-</span>beam
              </p>
            </li>
          </motion.ul>
        </div>
        <div className="w-full">
          <div>
            <h2 className="font-family-cera-stencil flex items-center justify-between py-2 text-white bg-primary px-4 text-2xl sm:text-4xl">
              Safety
              <motion.button
                animate={{ rotate: d ? 225 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => setD(!d)}
                className="cursor-pointer"
              >
                <Plus size={35} />
              </motion.button>
            </h2>
          </div>
          <motion.ul
            initial={{ height: 0, paddingBlock: 0 }}
            animate={{ height: d ? "auto" : 0, paddingBlock: 8 }}
            className="w-full overflow-hidden text-base sm:text-xl flex flex-col gap-1 divide-y-1 divide-black"
          >
            <li className="py-2 px-4 flex justify-start w-full">
              Front dual airbags
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Front seat side airbag
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Front and rear through type side air curtain
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              TPMS tire pressure monitoring system{" "}
              <span className="font-family-cera-stencil">(</span>Tire pressure
              alarm
              <span className="font-family-cera-stencil">)</span>
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Front seat belt fastening reminder
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              ISO<span className="font-family-cera-stencil">-</span>FIX child
              seat fixing device
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Vehicle speed sensitive automatic locking
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Child safety lock
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Combination instrument speed limit reminder
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Intelligent anti
              <span className="font-family-cera-stencil">-</span>theft system
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Low speed pedestrian reminder system
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Intelligent power braking system
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Anti lock braking system
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Electronic vehicle stability control
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Hydraulic brake assistance
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Traction control system
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Parking brake deceleration control system
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Vehicle dynamic control system
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Electronic brake force distribution system
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Comfortable braking function
            </li>
          </motion.ul>
        </div>
        <div className="w-full">
          <div>
            <h2 className="font-family-cera-stencil flex items-center justify-between py-2 text-white bg-primary px-4 text-2xl sm:text-4xl">
              Driving Assistance
              <motion.button
                animate={{ rotate: e ? 225 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => setE(!e)}
                className="cursor-pointer"
              >
                <Plus size={35} />
              </motion.button>
            </h2>
          </div>
          <motion.ul
            initial={{ height: 0, paddingBlock: 0 }}
            animate={{ height: e ? "auto" : 0, paddingBlock: 8 }}
            className="w-full overflow-hidden text-base sm:text-xl flex flex-col gap-1 divide-y-1 divide-black"
          >
            <li className="py-2 px-4 flex justify-start w-full">
              Rear parking radar×3
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Reverse image system
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Cruise control
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              ECO/Comfort/Sports/Snow Driving Mode
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Automatic parking system
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Hill start control system
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Pedal damping adjustment
            </li>
          </motion.ul>
        </div>
        <div className="w-full">
          <div>
            <h2 className="font-family-cera-stencil flex items-center justify-between py-2 text-white bg-primary px-4 text-2xl sm:text-4xl">
              Exterior
              <motion.button
                animate={{ rotate: f ? 225 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => setF(!f)}
                className="cursor-pointer"
              >
                <Plus size={35} />
              </motion.button>
            </h2>
          </div>
          <motion.ul
            initial={{ height: 0, paddingBlock: 0 }}
            animate={{ height: f ? "auto" : 0, paddingBlock: 8 }}
            className="w-full overflow-hidden text-base sm:text-xl flex flex-col gap-1 divide-y-1 divide-black"
          >
            <li className="py-2 px-4 flex justify-start w-full">
              15 inch steel wheel hub
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              16 inch aluminum alloy wheel hub
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Interior central locking system
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Keyless entry and one
              <span className="font-family-cera-stencil">-</span>click start
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Intelligent power on/off
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Tailgate electric unlocking
            </li>{" "}
          </motion.ul>
        </div>
        <div className="w-full">
          <div>
            <h2 className="font-family-cera-stencil flex items-center justify-between py-2 text-white bg-primary px-4 text-2xl sm:text-4xl">
              Interior
              <motion.button
                animate={{ rotate: g ? 225 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => setG(!g)}
                className="cursor-pointer"
              >
                <Plus size={35} />
              </motion.button>
            </h2>
          </div>
          <motion.ul
            initial={{ height: 0, paddingBlock: 0 }}
            animate={{ height: g ? "auto" : 0, paddingBlock: 8 }}
            className="w-full overflow-hidden text-base sm:text-xl flex flex-col gap-1 divide-y-1 divide-black"
          >
            <li className="py-2 px-4 flex justify-start w-full">
              Faux leather steering wheel
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Electrical air
              <span className="font-family-cera-stencil">-</span>conditioner
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Multi functional steering wheel
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Manual steering wheel adjustment
              <span className="font-family-cera-stencil">(</span>up+down+forth
              +back
              <span className="font-family-cera-stencil">)</span>
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Driver's sun visor with makeup mirror and lighting
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Front passenger's sun visor with makeup mirror and lighting
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Electronic gear shifting
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              7 inch combination instrument
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Wireless charging for mobile
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Car 12V power interface
            </li>
          </motion.ul>
        </div>
        <div className="w-full">
          <div>
            <h2 className="font-family-cera-stencil flex items-center justify-between py-2 text-white bg-primary px-4 text-2xl sm:text-4xl">
              Seat
              <motion.button
                animate={{ rotate: h ? 225 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => setH(!h)}
                className="cursor-pointer"
              >
                <Plus size={35} />
              </motion.button>
            </h2>
          </div>
          <motion.ul
            initial={{ height: 0, paddingBlock: 0 }}
            animate={{ height: h ? "auto" : 0, paddingBlock: 8 }}
            className="w-full overflow-hidden text-base sm:text-xl flex flex-col gap-1 divide-y-1 divide-black"
          >
            <li className="py-2 px-4 flex justify-start w-full">
              Integrated leatherette seat
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              <span className="font-family-cera-stencil">4</span>
              <span className="font-family-cera-stencil">-</span>way manual / 6
              <span className="font-family-cera-stencil">-</span>way power
              driver seat adjustment
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Driver seat adjustment
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              <span className="font-family-cera-stencil">4</span>
              <span className="font-family-cera-stencil">-</span>way manual
              front passenger seat adjustment
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Front seat heating
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Front seat rear storage bag
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Rear seat fold
              <span className="font-family-cera-stencil">-</span>down
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Front center armrest
            </li>
          </motion.ul>
        </div>
        <div className="w-full">
          <div>
            <h2 className="font-family-cera-stencil flex items-center justify-between py-2 text-white bg-primary px-4 text-2xl sm:text-4xl">
              Infotainment
              <motion.button
                animate={{ rotate: i ? 225 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => setI(!i)}
                className="cursor-pointer"
              >
                <Plus size={35} />
              </motion.button>
            </h2>
          </div>
          <motion.ul
            initial={{ height: 0, paddingBlock: 0 }}
            animate={{ height: i ? "auto" : 0, paddingBlock: 8 }}
            className="w-full overflow-hidden text-base sm:text-xl flex flex-col gap-1 divide-y-1 divide-black"
          >
            <li className="py-2 px-4  flex justify-start w-full">
              10.1 inch adaptive rotatable floating pad
            </li>
            <li className="py-2 px-4  flex justify-start w-full">
              Car Bluetooth system
            </li>
            <li className="py-2 px-4  flex justify-start w-full">
              Front row Type<span className="font-family-cera-stencil">-</span>
              A/C USB port×2
            </li>
            <li className="py-2 px-4  flex justify-start w-full">
              <span className="font-family-cera-stencil">4</span> Speakers
            </li>
          </motion.ul>
        </div>
        <div className="w-full">
          <div>
            <h2 className="font-family-cera-stencil flex items-center justify-between py-2 text-white bg-primary px-4 text-2xl sm:text-4xl">
              Light
              <motion.button
                animate={{ rotate: j ? 225 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => setJ(!j)}
                className="cursor-pointer"
              >
                <Plus size={35} />
              </motion.button>
            </h2>
          </div>
          <motion.ul
            initial={{ height: 0, paddingBlock: 0 }}
            animate={{ height: j ? "auto" : 0, paddingBlock: 8 }}
            className="w-full overflow-hidden text-base sm:text-xl flex flex-col gap-1 divide-y-1 divide-black"
          >
            <li className="py-2 px-4 flex justify-start w-full">
              Halogen/LED headlights
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              LED daytime running lights
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              LED full<span className="font-family-cera-stencil">-</span>width
              taillight
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              LED high mounted brake light
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Rear license plate light
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              LED indoor light
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Front headlight height adjustment
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Front headlights automatically turn on
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Front headlights early on and delayed off
            </li>
          </motion.ul>
        </div>
        <div className="w-full">
          <div>
            <h2 className="font-family-cera-stencil flex items-center justify-between py-2 text-white bg-primary px-4 text-2xl sm:text-4xl">
              Glass/Rearview mirror
              <motion.button
                animate={{ rotate: k ? 225 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => setK(!k)}
                className="cursor-pointer"
              >
                <Plus size={35} />
              </motion.button>
            </h2>
          </div>
          <motion.ul
            initial={{ height: 0, paddingBlock: 0 }}
            animate={{ height: k ? "auto" : 0, paddingBlock: 8 }}
            className="w-full overflow-hidden text-base sm:text-xl flex flex-col gap-1 divide-y-1 divide-black"
          >
            <li className="py-2 px-4 flex justify-start w-full">
              Four door power windows
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Driver's window with one
              <span className="font-family-cera-stencil">-</span>click lifting
              and anti<span className="font-family-cera-stencil">-</span>pinch
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Power adjustment of exterior rearview mirror
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Heating of exterior rearview mirror
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Manual anti glare for interior rearview mirror
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Rear windshield defrosting
            </li>
          </motion.ul>
        </div>
        <div className="w-full">
          <div>
            <h2 className="font-family-cera-stencil flex items-center justify-between py-2 text-white bg-primary px-4 text-2xl sm:text-4xl">
              New Energy Features
              <motion.button
                animate={{ rotate: l ? 225 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => setL(!l)}
                className="cursor-pointer"
              >
                <Plus size={35} />
              </motion.button>
            </h2>
          </div>
          <motion.ul
            initial={{ height: 0, paddingBlock: 0 }}
            animate={{ height: l ? "auto" : 0, paddingBlock: 8 }}
            className="w-full overflow-hidden text-base sm:text-xl flex flex-col gap-1 divide-y-1 divide-black"
          >
            <li className="py-2 px-4 flex justify-start w-full">
              Super safe blade battery
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Intelligent temperature control system
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              VTOL power discharging
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Scheduled charging
            </li>
            <li className="py-2 px-4 flex justify-start w-full">
              Coordinated regenerative braking system
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
