
escambo_theme = {


};

escambo_theme.user = {

  select: function(url, new_url) {
    var input = jQuery('#select-organization');
    if (input.val() == 'new')
      window.location = new_url;
    else
      jQuery.post(url, {profile_id: input.val()});
  },
};

