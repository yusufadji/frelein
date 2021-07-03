function ready(f) {
  /in/.test(document.readyState) ? setTimeout('ready(' + f + ')', 9) : f();
}
ready(function() {
  var uniair = new Vue({
    el: '#uniair-7936882821',
    data: {
      member: 'Kato Shiho',
      rarity: 'SSR',
      color: 'PURPLE',
      centerSkill: 'Skill activation rate 2.25 times.',
      skillType: 'Combo Support',
      skill: '22% chance to continue combo every 9 seconds for 8 seconds on GOOD, BAD, or MISS.'
    }
  })
});
