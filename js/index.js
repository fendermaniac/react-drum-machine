var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var drums = [
{
  id: "Q",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  desc: 'Heater-1',
  keyCode: 81 },

{
  id: "W",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  desc: 'Heater-2',
  keyCode: 87 },

{
  id: "E",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  desc: 'Heater-3',
  keyCode: 69 },

{
  id: "A",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  desc: 'Heater-4',
  keyCode: 65 },

{
  id: "S",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  desc: 'Heater-6',
  keyCode: 83 },

{
  id: "D",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  desc: 'Open-HH',
  keyCode: 68 },

{
  id: "Z",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  desc: 'Kick-n-Hat',
  keyCode: 90 },

{
  id: "X",
  src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  desc: 'Kick',
  keyCode: 88 },

{
  id: "C",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  desc: 'Closed-HH',
  keyCode: 67 }];



var url = 'https://s3.amazonaws.com/freecodecamp/drums/';
var track = {
  Q: "Heater-1",
  W: "Heater-2",
  E: "Heater-3",
  A: "Heater-4_1",
  S: "Kick_n_Hat",
  D: "Cev_H2",
  Z: "Bld_H1",
  X: "punchy_kick_1",
  C: "side_stick_1" };


var trackMap = {
  81: "Heater-1",
  87: "Heater-2",
  69: "Heater-3",
  65: "Heater-4_1",
  83: "Kick_n_Hat",
  68: "Cev_H2",
  90: "Bld_H1",
  88: "punchy_kick_1",
  67: "side_stick_1" };


var keyMap = {
  81: 'Q',
  87: 'W',
  69: 'E',
  65: 'A',
  83: 'S',
  68: 'D',
  90: 'Z',
  88: 'X',
  67: 'C' };


function DrumPad(props) {
  return (
    React.createElement("div", { className: "drum-pad", id: props.track, onClick: props.handleClick },
      props.kbdKey,
      React.createElement("audio", { className: "clip", id: props.kbdKey, src: props.audio })));


}var



DrumMachine = function (_React$Component) {_inherits(DrumMachine, _React$Component);
  function DrumMachine(props) {_classCallCheck(this, DrumMachine);var _this = _possibleConstructorReturn(this, (DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).call(this,
    props));
    _this.state = { lastTrackPlayed: 'Let\'s begin', soundId: '' };
    _this.playSound = _this.playSound.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);return _this;
  }_createClass(DrumMachine, [{ key: "componentDidMount", value: function componentDidMount()

    {
      document.addEventListener("keydown", this.handleKeyDown);
    } }, { key: "componentWillUnmount", value: function componentWillUnmount()

    {
      document.removeEventListener("keydown", this.handleKeyDown);
    } }, { key: "removeTransition", value: function removeTransition(

    e) {
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
    } }, { key: "playSound", value: function playSound(

    e) {
      document.getElementById(this.state.soundId).currentTime = 0;
      document.getElementById(this.state.soundId).play();

    } }, { key: "handleKeyDown", value: function handleKeyDown(

    e) {
      var key = keyMap[e.keyCode];
      var newTrack = trackMap[e.keyCode];
      var isValidKey = Object.keys(track).includes(key);
      this.setState({ soundId: isValidKey ? key : '',
        lastTrackPlayed: isValidKey ? newTrack : '' });
    } }, { key: "handleClick", value: function handleClick(

    e) {
      this.setState({ soundId: e.target.children[0].id, lastTrackPlayed: e.target.id });
    } }, { key: "render", value: function render()

    {var _this2 = this;
      var message = 'Let\'s begin!';
      if (this.state.soundId) {
        var _message = "Sound: " + track[this.state.soundId];
        this.playSound();
      }

      return (
        React.createElement("div", { id: "display" },
          React.createElement("h1", { className: "header" }, "Drum Machine"),
          React.createElement("p", { className: "message" }, "Track: ", this.state.lastTrackPlayed),
          React.createElement("div", { className: "container" },
            Object.keys(track).map(function (letter, i) {
              return (
                React.createElement(DrumPad, {
                  className: "drum-pad",
                  track: Object.values(track)[i],
                  keyCode: Object.keys(keyMap)[i],
                  key: Object.keys(keyMap)[i],
                  kbdKey: Object.keys(track)[i],
                  audio: "" + url + Object.values(track)[i] + ".mp3",
                  handleClick: _this2.handleClick }));


            }))));



    } }]);return DrumMachine;}(React.Component);


ReactDOM.render(React.createElement(DrumMachine, { drums: drums }), document.getElementById("drum-machine"));