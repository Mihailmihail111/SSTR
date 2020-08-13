import Vue from 'vue'

Vue.directive("filter", {
    bind: function(el, binding) {
        el.inputHandler = function(e) {
            var ch = e.currentTarget.value + String.fromCharCode(e.which);
            var re = new RegExp(binding.value);
            if (!re.test(ch)) {
                e.preventDefault();
            }
        };
        el.addEventListener("keypress", el.inputHandler);
    },
    unbind: function(el) {
        el.removeEventListener("keypress", el.inputHandler);
    },
    inputHandler: null
});