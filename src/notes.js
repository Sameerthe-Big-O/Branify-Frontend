onInPutChange = (event) => {
    console.log(event);
    console.log(event.target.value);
}
onSubmit = (event) => {
    console.log('on submit')
    this.onInPutChange();
}


//*one of the reason why this will give the error is that when we click on the button and then we're calling the on change butto and that event only gets called when the input get change and we pass the event and obvs at that time we didn't pass the event so the target value will be u defiend



//*when we pass something from the state we don't need to change for like usually when we pass the any props we usually do the destructure from that prop name