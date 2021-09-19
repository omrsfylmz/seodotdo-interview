<template>
  <div class="app">
    <apexchart
      width="550"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";
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
      // console.log(`this.volumeCategories `, this.volumeCategories);
      // console.log(`this.volumeSeries`, this.volumeSeries);
      // console.log(`this.series`, this.series);
      // console.log(`this.volumeData`, this.volumeData);
      // ApexCharts.exec("searchVolumeChart", "updateOptions", {
      //   xaxis: {
      //     categories: this.volumeCategories,
      //   },
      // });
    },
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          labels: {
            style: {
              colors: "#6B6B99",
              fontSize: "12px",
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
  // watch: {
  //   selectedKeyword() {
  //     axios
  //       .post(process.env.VUE_APP_ITEM_API, {
  //         country: "tr",
  //         lang: "tr",
  //         keyword: this.selectedKeyword,
  //       })
  //       .then(({ data }) => {
  //         this.series = [
  //           ...this.series,
  //           {
  //             name: this.selectedKeyword,
  //             data: data.map((mounth) => mounth.volume),
  //           },
  //         ];
  //       })
  //       .catch((e) => console.log(e));
  //   },
  // },
};
</script>
