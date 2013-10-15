
escambo_theme = {


};

escambo_theme.user = {

  select: function() {
    var input = jQuery('#select-organization');
    if (input.val() == 'new')
      window.location = this.new_enterprise_url;
    else
      jQuery.post(this.select_organization_url, {profile_id: input.val()});
  },
};

