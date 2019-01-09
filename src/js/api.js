export const Users = {
  login(crendential) {
    return new Promise((resolve, reject) => {
      console.log(crendential);
      $.ajax({
        url: 'http://crm-std.mn.com.vn/xRequest.ashx',
        method: 'POST',
        data: crendential,
        dataType: 'json',
      })
        .done(response => {
          alert('Request failed: ' + response);
          resolve(response);
        })
        .fail(error => {
          alert('Request failed: ' + JSON.stringify(error));
          reject(error);
        });
    });
  },
};

export const Data = {
  search(filter) {
    return new Promise((resolve, reject) => {
      console.log(filter);
      console.log(reject);
      resolve(filter);
    });
  },
};

export default {
  Users,
  Data,
};
