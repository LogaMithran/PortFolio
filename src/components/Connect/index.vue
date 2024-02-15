<template>
  <v-sheet
    color="#092635"
    rounded="lg"
    class="connect-div"
  >
    <h1> Connect </h1>
    <v-form class="form-details">
      <v-row class="mt-2">
        <v-col class="">
          <v-text-field
            label="Email"
            variant="solo"
            v-model="recipientMailer"
            :rules="[() => !!recipientMailer || 'This field is required']"
            :error-messages="errorMessages"
          >
            <template
              v-slot:prepend-inner
            >
              <v-icon color="blue-grey-darken-4">mdi-email</v-icon>
            </template>
          </v-text-field>
          <v-textarea
            :rules="[() => !!recipientMailer || 'This field is required']"
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
}
v-text-field, v-textarea {
  width: fit-content;
}
.form-details {
  margin: 20px;
  justify-content: center;
}

.success-div {
  text-align: center;
  margin: 10px;
  position: absolute;
}
</style>
<script lang="ts">
import axios from "axios"
import {sendMailToMk} from "@/services/MailerService";
import gql from "graphql-tag";

export default {
  data: () => {
    return {
      recipientMailer: null,
      bodyText: null,
      sendMailLoading: false,
      mailSent: false,
      displaySnackbar: false,
      mailSentMessage: "",
      errorMessages: ""
    }
  },
  methods: {
    async sendMail() {
      try {
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
            },
            errorPolicy: "all"
        });
        if (mailResponse && mailResponse.data.sendMail.status) {
          this.mailSent = true
          this.sendMailLoading = false
          this.displaySnackbar = true
          this.mailSentMessage = "Mail sent successfully"
          this.bodyText = null
          this.recipientMailer = null
        } else {
          this.mailSent = true
          this.sendMailLoading = false
          this.displaySnackbar = true
          this.mailSentMessage = "Oops!, Something went wrong"
          this.bodyText = null
          this.recipientMailer = null
        }
      } catch (e){
        this.mailSentMessage = "Oops!, Something went wrong"
      }
    }
  }
}
</script>
