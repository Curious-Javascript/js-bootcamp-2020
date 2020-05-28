/* global _ */
(function () {
  const fun = () => {
    console.log('fun executed');
  };
  const fun2 = () => {};

  window._ = {
    fun,
    fun2,
  };
})();

_.fun();
