input.onButtonPressed(Button.A, function () {
    if (count < 4) {
        count += 1
        if (count == 1) {
            basic.showNumber(count)
            powerbrick.GC_LEDONOFF(powerbrick.GCLed.LED1, powerbrick.GCOnOff.On)
        } else if (count == 2) {
            basic.showNumber(count)
            powerbrick.GC_LEDONOFF(powerbrick.GCLed.LED1, powerbrick.GCOnOff.On)
            powerbrick.GC_LEDONOFF(powerbrick.GCLed.LED3, powerbrick.GCOnOff.On)
        } else if (count == 3) {
            basic.showNumber(0)
            powerbrick.GC_LEDONOFF(powerbrick.GCLed.LED1, powerbrick.GCOnOff.On)
            powerbrick.GC_LEDONOFF(powerbrick.GCLed.LED2, powerbrick.GCOnOff.On)
            powerbrick.GC_LEDONOFF(powerbrick.GCLed.LED3, powerbrick.GCOnOff.On)
        } else if (count == 4) {
            basic.showNumber(count)
            powerbrick.GC_LEDONOFF(powerbrick.GCLed.All, powerbrick.GCOnOff.On)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    if (count < 1) {
        count += -1
        if (count == 3) {
            basic.showNumber(count)
            powerbrick.GC_LEDONOFF(powerbrick.GCLed.LED1, powerbrick.GCOnOff.On)
            powerbrick.GC_LEDONOFF(powerbrick.GCLed.LED2, powerbrick.GCOnOff.On)
            powerbrick.GC_LEDONOFF(powerbrick.GCLed.LED4, powerbrick.GCOnOff.On)
        } else if (count == 2) {
            basic.showNumber(count)
            powerbrick.GC_LEDONOFF(powerbrick.GCLed.LED1, powerbrick.GCOnOff.On)
            powerbrick.GC_LEDONOFF(powerbrick.GCLed.LED4, powerbrick.GCOnOff.On)
        } else if (count == 1) {
            basic.showNumber(count)
            powerbrick.GC_LEDONOFF(powerbrick.GCLed.LED1, powerbrick.GCOnOff.On)
        }
    }
})
let count = 0
basic.showNumber(0)
let _0 = 0
powerbrick.GC_MODE(powerbrick.GCMode.LED)
