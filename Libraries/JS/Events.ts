export type Event =
  "abort" |
  "afterprint" |
  "animationend" |
  "animationiteration" |
  "animationstart" |
  "beforeprint" |
  "beforeunload" |
  "blur" |
  "canplay" |
  "canplaythrough" |
  "change" |
  "click" |
  "contextmenu" |
  "copy" |
  "cut" |
  "dblclick" |
  "drag" |
  "dragend" |
  "dragenter" |
  "dragleave" |
  "dragover" |
  "dragstart" |
  "drop" |
  "durationchange" |
  "ended" |
  "error" |
  "focus" |
  "focusin" |
  "focusout" |
  "fullscreenchange" |
  "fullscreenerror" |
  "hashchange" |
  "input" |
  "invalid" |
  "keydown" |
  "keypress" |
  "keyup" |
  "load" |
  "loadeddata" |
  "loadedmetadata" |
  "loadstart" |
  "message" |
  "mousedown" |
  "mouseenter" |
  "mouseleave" |
  "mousemove" |
  "mouseover" |
  "mouseout" |
  "mouseup" |
  "mousewheel" |
  "offline" |
  "online" |
  "open" |
  "pagehide" |
  "pageshow" |
  "paste" |
  "pause" |
  "play" |
  "playing" |
  "popstate" |
  "progress" |
  "ratechange" |
  "resize" |
  "reset" |
  "scroll" |
  "search" |
  "seeked" |
  "seeking" |
  "select" |
  "show" |
  "stalled" |
  "storage" |
  "submit" |
  "suspend" |
  "timeupdate" |
  "toggle" |
  "touchcancel" |
  "touchend" |
  "touchmove" |
  "touchstart" |
  "transitionend" |
  "unload" |
  "volumechange" |
  "waiting" |
  "wheel";

export default class EventObject {
  private readonly event: Event;
  private action: Function | null;

  constructor(event: Event) {
    this.event = event;
  }

  // need to implement
  private constructEvent(): void {}

  public preventDefault(): void {
    this.action = null;
  }
}