import $ from 'jquery';
import Vue from 'vue';

const baseURI = 'https://jsonstorage.net/api/items/';
const id = '20334265-7aff-48d3-bc29-c2e6c44a5d5d'


export default new Vue({

  data: {
    data: {}
  },
  methods: {
    fetch() {
      return new Promise(resolve => {
        $.getJSON(baseURI + id).done(resp => {
          this.data = resp;
          console.log(this.data, 'fetched')
          resolve(resp)
        }).fail(err => this.data = initialData())
      });
    },

    create() {
      $.ajax({
        url: baseURI,
        type: "POST",
        data: '{"key":"value"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
          console.log(data);
        }
      });
    },

    sync() {
      $.ajax({
        url: baseURI + id,
        type: "PUT",
        data: JSON.stringify(this.data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
          console.log('updated', data)
        }
      });
    }
  }
});
