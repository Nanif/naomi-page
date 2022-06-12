<template>
  <div class="app-header header-shadow">
    <div class="logo-src">

    </div>
    <div class="app-header__content">
      <div class="app-header-right">
        <SearchBox/>
      </div>

      <div class="app-header-left">
        <action-button :class="'mr-2 mb-2'"
                       :hide-divider="true"
                       :icon-class="'icon-rocket'"
                       :title="'פרסום'"
                       @execute="updateMeshivon"></action-button>
        <!--                <b-button class="mr-2 mb-2 btn-transition btn-smarket-1"-->
        <!--                          @click="updateMeshivon"-->
        <!--                >פרסום &nbsp;<i class="icon-rocket"></i>-->
        <!--                </b-button>-->
      </div>
      <div class="app-header-left">
        <b-button class="mr-2 mb-2 btn-transition btn-smarket-1"
                  @click="downloadCatalog"
        >הורדה &nbsp;<i class="icon-cloud-download"></i>
        </b-button>
      </div>
      <div class="app-header-left">
        <b-button class="mr-2 mb-2 btn-transition btn-smarket-3"
                  @click="previewCatalog"
        >תצוגה מקדימה &nbsp;<i class="icon-desktop"></i>
        </b-button>
      </div>
      <div class="app-header-left">
        <UserArea/>
      </div>
    </div>
    <div class="app-header__mobile-menu">
      <div>
        <button class="hamburger close-sidebar-btn hamburger--elastic" type="button"
                v-bind:class="{ 'is-active' : isOpen }" @click="toggleMobile('closed-sidebar-open')">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
        </button>
      </div>
    </div>
    <div class="app-header__menu">
            <span>
                <b-button class="btn-icon btn-icon-only" size="sm" v-bind:class="{ 'active' : isOpenMobileMenu }"
                          variant="primary" @click="toggleMobile2('header-menu-open')">
                    <div class="btn-icon-wrapper">
                        <font-awesome-icon icon="ellipsis-v"/>
                    </div>
                </b-button>
            </span>
    </div>

  </div>
</template>

<script>
//
/*

 */

import SearchBox from './Header/SearchBox';
import UserArea from './Header/HeaderUserArea';

import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import ActionButton from "../../Smarket/Components/ActionButton";
import {DistributionService} from "../../Smarket/Services/DistributionService";
import {mapState, mapActions} from 'vuex'

library.add(
    faEllipsisV,
);
export default {
  name: "Header",
  components: {
    ActionButton,
    SearchBox,
    UserArea,
    'font-awesome-icon': FontAwesomeIcon,
  },

  data() {
    return {
      isOpen: false,
      isOpenMobileMenu: false,
    }
  },
  props: {},
  computed: {
    ...mapState('distribution',['downloadUrl'])
  },
  mounted() {
    this.getDownloadUrl()
  },
  methods: {
    ...mapActions('distribution', ['getDownloadUrl']),
    toggleMobile(className) {
      const el = document.body;
      this.isOpen = !this.isOpen;

      if (this.isOpen) {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },

    toggleMobile2(className) {
      const el = document.body;
      this.isOpenMobileMenu = !this.isOpenMobileMenu;

      if (this.isOpenMobileMenu) {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },

    downloadCatalog() {
      window.console.log(this.downloadUrl)
      window.open(this.downloadUrl, "_blank");
      // CatalogService.downloadCatalog();
    },

    updateMeshivon({onExecuted}) {
      DistributionService.updateMeshivon().then((job) => {
        window.console.log(job)
        let inProgress = true
        let timer = setInterval(async function () {
          if (inProgress) {
            window.console.log('get status')
            let result = await DistributionService.updateMeshivonStatus(job.id)
            window.console.log('result', result)
            if (result.state != "active" && result.state != "waiting") {
              inProgress = false;
            }
          } else {
            clearInterval(timer)
            onExecuted();
          }
        }, 1500);
      });
    },

    previewCatalog() {
      let catalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
      let catalog = JSON.parse(localStorage.getItem('user')).catalogs.find(c => c.id == catalogId)
      let url = `https://preview.smarket.center/?storeId=${catalog.storeId}&catalogId=${catalogId}`
      window.open(url, '_blank').focus();
    }
  }
};
</script>
