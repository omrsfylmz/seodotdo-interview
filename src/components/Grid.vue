<template>
  <ag-grid-vue
    style="width: 1000px; height: 650px;"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    rowSelection="multiple"
    :rowData="rowData"
    pagination="true"
    paginationAutoPageSize="true"
    @rowClicked="onRowClicked"
  >
  </ag-grid-vue>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import axios from "axios";
import { inject } from "vue";

export default {
  name: "App",
  data() {
    return {
      columnDefs: null,
      rowData: null,
      paginationSize: null,
      keyword: null,
      showModal: true,
    };
  },
  setup() {
    const useshowModal = inject("showModal");

    return {
      useshowModal,
    };
  },

  components: {
    AgGridVue,
  },
  beforeMount() {
    this.columnDefs = [
      {
        headerName: "KEYWORD",
        field: "keyword",
        sortable: true,
        filter: true,
        width: 230,
      },
      {
        headerName: "SEARCH VOLUME",
        field: "avgSearchVolume",
        sortable: true,
        filter: true,
        width: 170,
      },
      {
        headerName: "RANK",
        field: "rank",
        // valueFormatter: '"★ " + value.toLocaleString()',
        sortable: true,
        filter: true,
        width: 99,
      },
      {
        headerName: "CHANGE",
        field: "diffRank",
        // valueFormatter: (params) =>
        //   params.value > 0
        //     ? `${"+" + params.value.toLocaleString()}`
        //     : `${params.value.toLocaleString()}`,
        sortable: true,
        filter: true,
        width: 120,
        // cellStyle: (params) =>
        //   params.value == 0
        //     ? { background: "white", color: "#6b6b99" }
        //     : params.value > 0
        //     ? { background: "#ecfcf7", color: "#21d99b" }
        //     : { background: "#fff0f4", color: "#ff4d79" },
      },
      {
        headerName: "PX RANK",
        field: "pixelRank",
        sortable: true,
        filter: true,
        width: 120,
      },
      {
        headerName: "CHANGE",
        field: "diffPixelRank",
        // valueFormatter: (params) =>
        //   params.value > 0
        //     ? `${"+" + params.value.toLocaleString() + "%"}`
        //     : `${params.value.toLocaleString() + "%"}`,
        sortable: true,
        filter: true,
        width: 120,
        // cellStyle: (params) =>
        //   params.value == 0
        //     ? { background: "white", color: "#6b6b99" }
        //     : params.value > 0
        //     ? { background: "#ecfcf7", color: "#21d99b" }
        //     : { background: "#fff0f4", color: "#ff4d79" },
      },
      {
        headerName: "URL-PAGE",
        field: "landingPage",
        sortable: true,
        filter: true,
        width: 210,
      },
      {
        headerName: "CPC - $",
        field: "cpc",
        sortable: true,
        filter: true,
        width: 180,
      },
    ];

    axios
      .post(process.env.VUE_APP_LIST_API, {
        firstDate: "2020-02-25",
        lastDate: "2020-02-20",
        domain: "akakce.com",
        limit: "10",
        page: 3,
      })
      .then(({ data }) => {
        this.rowData = data;
      })
      .catch((e) => console.log(e));
    this.paginationSize = 10;
  },
  methods: {
    onRowClicked(params) {
      this.useshowModal = true;
      this.changeKeyword(params.node.data.keyword);
    },
    changeKeyword(keyword) {
      this.$emit("selectedKeyword", keyword);
    },
  },
};
</script>

<style lang="scss">
@import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>
