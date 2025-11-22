input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        basic.showString("A")
    }
    if (receivedString == "B") {
        basic.showString("B")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
	
})
