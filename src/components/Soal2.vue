<template>

  <body>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-6">
          <div class="card mt-5">
            <div class="card-body font-timer">
              <span class="minutes" v-text="minutes"></span>
              :
              <span class="seconds" v-text="secondsShown"></span>
            </div>

            <div class="
                col
                d-flex
                justify-content-center
                p-4
                flex-fill
                bd-highlight
              ">
              <button type="button" class="btn btn-primary margin" v-on:click="play">
                Play
              </button>

              <button type="button" class="btn btn-secondary margin" v-on:click="stop">
                Pause
              </button>

              <button type="button" class="btn btn-danger margin" v-on:click="reset">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
  export default {
    data: () => ({
      minutes: 25,
      seconds: 0,
      interval: null,
      started: false,
    }),

    methods: {
      showLocaleTime: function () {
        this.interval = setInterval(this.intervalCallback, 1000);
      },
      play: function () {
        if (!this.minutes && !this.seconds) this.resetTimer();
        this.started = true;
      },
      stop: function () {
        this.started = false;
      },
      reset: function () {
        this.minutes = 25;
        this.seconds = 0;
        this.started = false;
      },
      intervalCallback: function () {
        if (!this.started) return false;
        if (this.seconds == 0) {
          if (this.minutes == 0) {
            this.timerComplete();
            return null;
          }
          this.seconds = 59;
          this.minutes--;
        } else {
          this.seconds--;
        }
      },
      timerComplete: function () {
        this.started = false;
        alert("Good work! Now take a 5 minute break.");
      },
    },
    computed: {
      buttonText: function () {
        if (this.started) return "Pause Timer";
        return "Start Timer";
      },
      secondsShown: function () {
        if (this.seconds < 10) {
          return "0" + parseInt(this.seconds, 10);
        }
        return this.seconds;
      },
    },
    mounted() {
      this.showLocaleTime();
    },
  };
</script>