<template>
  <v-sheet
    color="blue-grey-darken-1"
    min-height="400px"
    rounded="lg"
    class="connect-div"
  >
    <h1> Connect </h1>
    <v-form class="form-details">
      <v-row class="mt-2">
        <v-col>
          <v-text-field
            label="Email"
            variant="solo"
            v-model="recipientMailer"
          >
            <template
              v-slot:prepend-inner
            >
              <v-icon color="blue-grey-darken-4">mdi-email</v-icon>
            </template>
          </v-text-field>
          <v-textarea
            variant="solo"
            placeholder="Give your valuable inputs"
            v-model="bodyText"
          >
            <template
              v-slot:prepend-inner
            >
              <v-icon color="blue-grey-darken-4">mdi-comment</v-icon>
            </template>
          </v-textarea>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="auto">
          <v-btn
            :loading=sendMailLoading
            rounded="lg"
            elevation="9"
            text="Send"
            @click="sendMail"
          ></v-btn>
        </v-col>
      </v-row>
      <v-snackbar
        v-model="displaySnackbar"
        :timeout="2000"
      >
        {{ mailSentMessage }}
      </v-snackbar>
    </v-form>
  </v-sheet>
</template>

<style>
.connect-div > h1 {
  padding-left: 20px;
  padding-top: 10px;
}

.connect-div {
  position: relative;
  display: flex;
  overflow: hidden;
}

.form-details {
  margin: 10px;
  justify-content: center;
}

.form-details {
}

.success-div {
  text-align: center;
  margin: 10px;
  //z-index: 10;
  position: absolute;
}
</style>
<script>
import axios from "axios"
import {sendMailToMk} from "@/services/MailerService";
import gql from "graphql-tag";

export default {
  data: () => {
    return {
      recipientMailer: "",
      bodyText: "",
      sendMailLoading: false,
      mailSent: false,
      displaySnackbar: false,
      mailSentMessage: "Mail sent successfully"
    }
  },
  methods: {
    async sendMail() {
      this.sendMailLoading = true
      const mailResponse = await this.$apollo.mutate({
        mutation: gql`
                mutation sendMail($filters: MailerInput!) {
                    sendMail(sendMailInput: $filters ){
                        status
                        response
                    }
                }`,
        variables:
          {
            "filters": {
              "from": this.recipientMailer,
              "body": this.bodyText
            }
          }
      });
      if (mailResponse && mailResponse.data.sendMail.status) {
        this.mailSent = true
        this.sendMailLoading = false
        this.displaySnackbar = true
        this.bodyText = ""
        this.recipientMailer = ""
      }
    }
  }
}
</script>
