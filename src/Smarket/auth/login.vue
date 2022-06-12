<template>
    <div>
        <div class="h-100 bg-tempting-azure bg-animation">
            <div class="d-flex h-100 justify-content-center align-items-center">
                <b-col md="8" class="mx-auto app-login-box">
                    <div class="app-logo-inverse mx-auto mb-3"/>

                    <div class="modal-dialog w-100 mx-auto">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="h5 modal-title text-center">
                                    <h4 class="mt-2">
                                        <div>ברוכים הבאים</div>
                                        <span>היכנסו לחשבון הסמרקט שלכם</span>
                                    </h4>
                                </div>
                                <b-form-group id="loginEmail"
                                              label-for="loginEmail"
                                              description="כתובת מייל">
                                    <b-form-input id="exampleInput1"
                                                  type="email"
                                                  required
                                                  placeholder="כתובת מייל"
                                                  v-model="userEmail">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="loginPassword"
                                              label-for="loginPassword"
                                              description="סיסמה">
                                    <b-form-input id="loginPassword"
                                                  type="password"
                                                  required
                                                  placeholder="סיסמה"
                                                  v-model="password">
                                    </b-form-input>
                                </b-form-group>
                                <!--                                <b-form-checkbox name="keep" id="keepLogin">-->
                                <!--                                    לשמור אותי בפנים-->
                                <!--                                </b-form-checkbox>-->
                                <div class="divider"/>
                                <!--                                <h6 class="mb-0">-->
                                <!--                                    אין לכם חשבון עדין?-->
                                <!--                                    <a href="javascript:void(0);" class="text-primary">הירשמו עכשיו</a>-->
                                <!--                                </h6>-->
                            </div>
                            <div class="modal-footer clearfix">
                                <div class="float-left">
                                    <a href="https://smarket.center" target="_blank" class="btn-lg btn btn-link">חזרה לאתר של סמרקט</a>
                                </div>
                                <div class="float-right">
                                    <b-button variant="primary" size="lg" v-on:click="handleSubmit">כניסה למערכת
                                    </b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-white opacity-8 mt-3">
                        Copyright &copy; Smarket Platform 2021
                    </div>
                </b-col>
            </div>
        </div>
    </div>
</template>


<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                userEmail: '',
                password: '',
                submitted: false
            }
        },
        computed: {
            ...mapState('account', ['status'])
        },
        created() {
            window.console.log('status', this.status)
            let loggedin = this.status && this.status.loggedIn

            this.logout();
            if (loggedin) {
                window.console.log('loggedin')
                // reset login status
                window.location.reload();
            }
        },
        methods: {
            ...mapActions('account', ['login', 'logout']),
            async handleSubmit() {
                this.submitted = true;
                const {userEmail, password} = this;
                if (userEmail && password) {
                    await this.login({userEmail, password})
                }
            }
        }
    };
</script>
