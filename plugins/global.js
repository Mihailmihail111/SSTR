export default (context, inject) => {
    const tmp = (msg) => {
        console.log('tmp' + msg);
    }
    
    inject('tmp', tmp)
    context.$tmp = tmp
  }