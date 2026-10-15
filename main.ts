input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Butterfly)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Happy)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
    radio.setGroup(13)
    if (false) {
        basic.pause(1000)
    }
})
basic.showIcon(IconNames.Angry)
