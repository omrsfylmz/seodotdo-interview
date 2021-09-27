<template>
  <div class="app">
    <apexchart
      width="610"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    selectedKeyword: String,
    volumeData: Array,
  },
  created() {
    this.setData();
  },
  methods: {
    setData() {
      this.volumeSeries = this.volumeData.map((el) => el.volume);
      this.volumeCategories = this.volumeData.map((el) => el.date);
      this.series = [
        {
          data: this.volumeSeries,
        },
      ];
    },
  },
  data() {
    return {
      chartOptions: {
        colors: ["#9999CC"],
        dataLabels: {
          enabled: false,
        },
        chart: {
          id: "seodo",
        },
        xaxis: {
          labels: {
            style: {
              colors: "#9999CC",
              fontSize: "12px",
              fontFamily: "Barlow, sans-serif",
              fontWeight: 400,
            },
          },
          categories: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
          ],
        },
        yaxis: {
          labels: {
            style: {
              colors: "#6B6B99",
              fontSize: "12px",
              fontWeight: 400,
            },
            formatter: function(num) {
              if (num > 999 && num < 1000000) {
                return Math.abs(num) > 999
                  ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
                  : Math.sign(num) * Math.abs(num);
              } else if (num > 99999) {
                return Math.abs(num) > 99999
                  ? Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + "M"
                  : Math.sign(num) * Math.abs(num);
              }
            },
          },
        },
      },

      volumeSeries: [],
      volumeCategories: [],
      series: [
        {
          name: "value",
          data: [],
        },
      ],
    };
  },
};
</script>
