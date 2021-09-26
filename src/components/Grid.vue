<template>
  <div class="grid">
    <ag-grid-vue
      id="myGrid"
      style="width: 100%; height: 516px"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
      pagination="true"
      @rowClicked="onRowClicked"
      :paginationPageSize="paginationPageSize"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import axios from "axios";
import { inject } from "vue";

// Custom Ag-grid Cell Components
import changeCell from "./ChangeCell.vue";
import avgSearchVolumeCell from "./SearchVolumeCell.vue";
import rankCell from "./RankCell.vue";
import pixelRankCell from "./PixelRankCell.vue";
import diffPixelRankCell from "./DiffPixelRankCell.vue";
import urlCell from "./UrlCell.vue";
import cpcCell from "./CpcCell.vue";
import keywordCell from "./KeywordCell.vue";

export default {
  name: "App",
  data() {
    return {
      columnDefs: null,
      rowData: null,
      paginationPageSize: null,
      keyword: null,
      showModal: true,
    };
  },
  setup() {
    const useShowModal = inject("showModal");

    return {
      useShowModal,
    };
  },

  components: {
    AgGridVue,
  },
  beforeMount() {
    this.paginationPageSize = 20;
    this.columnDefs = [
      {
        headerName: "KEYWORD",
        field: "keyword",
        cellRendererFramework: keywordCell,
        sortable: true,
        filter: true,
        width: 230,
      },
      {
        headerName: "SEARCH VOLUME",
        field: "avgSearchVolume",
        cellRendererFramework: avgSearchVolumeCell,
        sortable: true,
        filter: true,
        width: 170,
      },
      {
        headerName: "RANK",
        field: "rank",
        cellRendererFramework: rankCell,
        cellStyle: { marginLeft: "-10px" },
        sortable: true,
        filter: true,
        width: 99,
      },
      {
        headerName: "CHANGE",
        field: "diffRank",
        cellRendererFramework: changeCell,
        width: 120,
      },
      {
        headerName: "PX RANK",
        field: "pixelRank",
        cellRendererFramework: pixelRankCell,
        sortable: true,
        filter: true,
        width: 120,
      },
      {
        headerName: "CHANGE",
        field: "diffPixelRank",
        cellRendererFramework: diffPixelRankCell,
        sortable: true,
        filter: true,
        width: 120,
      },
      {
        headerName: "URL-PAGE",
        field: "landingPage",
        cellRendererFramework: urlCell,
        sortable: true,
        filter: true,
        width: 210,
      },
      {
        headerName: "CPC - $",
        cellRendererFramework: cpcCell,
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
        limit: "100",
        page: 3,
      })
      .then(({ data }) => {
        this.rowData = data;
      })
      .catch((e) => console.log(e));
  },
  methods: {
    onRowClicked(params) {
      this.useShowModal = true;
      this.$emit("selectedKeyword", params.node.data.keyword);
    },
  },
};
</script>

<style lang="scss">
@import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
@import url("../styles/variable.scss");

.grid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.ag-center-cols-viewport {
  background-color: var(--grid-row-bg);
}
.ag-icon {
  color: var(--grid-cell-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 5px;
}
.ag-body-viewport [col-id="keyword"] {
  border-right: 1px solid var(--border-color) !important;
}
.ag-paging-description {
  border: 1px solid var(--border-color-pageOf);
  border-radius: 4px;
  padding: 5px;
}
.ag-paging-panel {
  background-color: var(--grid-row-bg);
}
.ag-paging-description,
.ag-paging-row-summary-panel {
  color: var(--grid-cell-color);
}
.ag-theme-alpine .ag-icon-last,
.ag-theme-alpine .ag-icon-first {
  display: none;
}
.ag-theme-alpine {
  .ag-header {
    background-color: var(--grid-header-bg);
  }
  .ag-row {
    background-color: var(--grid-row-bg);
  }
  .ag-row:hover {
    background-color: var(--grid-row-hover);
  }
  .ag-theme-alpine,
  .ag-root-wrapper {
    border: none !important;
  }
  .ag-header-group-cell-label,
  .ag-header-cell-label {
    font-size: 12px;
    font-weight: 600;
    color: var(--grid-cell-color);
  }
  .ag-cell-value {
    color: var(--grid-cell-color);
  }
  .ag-body-viewport [col-id="diffRank"],
  .ag-body-viewport [col-id="diffPixelRank"] {
    width: 89px !important;
    height: 36px;
    margin: 2px 0 0 0;
    border-radius: 4px;
  }
  .ag-overlay-loading-wrapper {
    background-color: var(--grid-row-bg);
  }
}
</style>
