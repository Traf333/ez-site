import $ from 'jquery';

const baseURI = 'https://jsonstorage.net/api/items/';
const id = '20334265-7aff-48d3-bc29-c2e6c44a5d5d'

function initialData() {
  return {
    input: 123, 
    output: 'asfd',     
    title: 'Initial',
    content: 'some content',
  }
}

class Storage {

  data = {};

  fetch() {
    return new Promise(resolve => {
      $.getJSON(baseURI + id).done(resp => {
        this.data = resp; 
        console.log(this.data, 'fetched')
        resolve(resp)
      }).fail(err => this.data = initialData())
    });
  }

  create() {
    $.ajax({
      url: baseURI,
      type:"POST",
      data:'{"key":"value"}',
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      success: function(data, textStatus, jqXHR){
        console.log(data);
      }
    }); 
  }
  
  update(data) {
      this.data = {...this.data, ...data };
      console.log(this.data)
      $.ajax({
          url: baseURI + id,
          type:"PUT",
          data: JSON.stringify(this.data),
          contentType:"application/json; charset=utf-8",
          dataType:"json",
          success: function(data, textStatus, jqXHR){
              console.log('updated', data)
          }
      }); 
  }
}

export default new Storage();