window.setTimeout(function () {
	
	main();

}, 3000)

function main() {
	
	const body_bg = document.getElementsByTagName('body');
	const back_bg = document.querySelectorAll('.back');
	const border_dialog = document.querySelectorAll('.page_block');

	const my_styles = document.createElement('style');

	body_bg[0].appendChild(my_styles);

	// body_bg[0].style.background = bgg;
	back_bg[1].style.background = one_bg;
	back_bg[1].style.borderBottom = one_bg;
	// border_dialog.forEach(function(element){
	// 	element.style.boxShadow = '1px 0px 1px 0 #d7d8db';		
	// });

	// const icon_dialog = document.querySelector('.im-page--center-empty');
	// icon_dialog.style.backgroundImage = 'url("https://i.gifer.com/TTRH.gif")';
	// icon_dialog.style.backgroundSize = '120px';

	my_styles.innerHTML = 
	'body{background: var(--bgg)}\
	/*dialog*/\
	#side_bar ol li .left_row:hover, .dev_top_link.sel, .dev_top_link.sel:hover, .dev_home_link:hover, .dev_top_link:hover, .top_nav_link.active, .top_nav_link:hover, .top_nav_btn.active, .top_nav_btn:hover, .top_audio_player.active, .top_audio_player:hover, .dev_top_input, .im-page .im-page--center-empty{background: none;}\
	#side_bar ol li .left_row, a.im-page--dialogs-filter, a._im_start_new, .im-mess-stack .im-mess-stack--content .im-mess-stack--pname>a, a.im-page--title-main-inner._im_page_peer_name{color: var(--text)}\
	.page_block, .im-page .im-page--dialogs-footer.ui_grey_block, .im-page--header.ui_search._im_dialogs_search, .ui_search.ui_search_field_empty._im_dialogs_search_input.im-page--dialogs-search.ui_search_custom._wrap.ui_search_old, .ui_search_input_block, .im-page--mess-search._im_mess_search, .nim-dialog .nim-dialog--content, .im-page--chat-header-in, .im-page--title-wrapper, .im-page--toolsw, .im-chat-input.clear_fix._im_chat_input_parent, .im-mess.im-mess_selected:last-child:before, .im-mess.im-mess_unread:last-child:before, .im-page .im-page--history-new-bar, .thumbed_link__thumb, .thumbed_link__label, .thumbed_link--chat-invitation, .im-page .im-page--history-new-bar:after, .im-page .im-page--history-new-bar:before, .im-page .im-page--history-new-bar>span{background-color: var(--bg); box-shadow: none; border: none;}\
	.im-mess--text.wall_module._im_log_body, .thumbed_link--chat-invitation .thumbed_link__title, .im-page .im-search-results-head, a.im-popular--name, span._im_dialog_link, span.im-page--selected-messages-count{color: var(--white_text)}\
	.nim-dialog.nim-dialog_unread-out.nim-dialog_muted:not(.nim-dialog_failed) .nim-dialog--unread, .nim-dialog.nim-dialog_unread-out:not(.nim-dialog_failed) .nim-dialog--unread, .nim-dialog.nim-dialog_unread.nim-dialog_unread-out:not(.nim-dialog_failed) .nim-dialog--unread{background-color: var(--mark)}\
	.nim-dialog .nim-dialog--preview-attach{color: var(--text)}\
	.im-page .im-page--top-date-bar{background: none; color:var(--white_text)}\
	input.ui_search_field{color: var(--white_text)}\
	.im-page .im-page--mess-search{color: var(--text)}\
	.im-page .im-page--mess-search:hover{color: var(--text); background: var(--main_bg)}\
	\
	.nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_classic.nim-dialog_unread, .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_hovered, .nim-dialog:not(.nim-dialog_deleted).nim-dialog:hover, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered+.nim-dialog, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected+.nim-dialog, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic+.nim-dialog, .nim-dialog:not(.nim-dialog_deleted):hover+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted):hover+.nim-dialog, .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_selected.nim-dialog_classic.nim-dialog_unread, .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_selected.nim-dialog_hovered, .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_selected:hover, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered+.nim-dialog.nim-dialog_selected, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered.nim-dialog_selected+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected+.nim-dialog, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected:hover+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic+.nim-dialog.nim-dialog_selected, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic.nim-dialog_selected+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted):hover+.nim-dialog.nim-dialog_selected{border-top: solid 1px var(--bg);}\
	.nim-dialog._im_dialog:hover, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_muted.nim-dialog_selected, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected{background-color: var(--bg); border:none;}\
	.nim-dialog .nim-dialog--photo, .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_muted.nim-dialog_selected .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_muted.nim-dialog_selected .nim-dialog--photo, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected .nim-dialog--photo, .nim-peer{border-radius: 50%; background-color: var(--bg); border-color: var(--bg);}\
	li.im-mess._im_mess.im-mess_unread._im_mess_unread.im-mess_out.im-mess_editable, .im-mess.im-mess_selected:not(.im-mess_is_editing), .im-mess.im-mess_selected:not(.im-mess_is_editing):hover, input.text.ts_input, input.text.ts_input:focus{background-color: var(--main_bg); border-color:none;}\
	\
	.im-chat-input .im-chat-input--txt-wrap, .fakeinput, div[contenteditable=true], input.big_text, input.dark, input.search, input.text, textarea{background-color: var(--bg); border: 1px solid var(--main_bg); color: var(--white_text);}\
	\
	/*.nim-peer .nim-peer--photo-w{border-radius: 0;}*/\
	.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic, .nim-dialog:not(.nim-dialog_deleted):hover{background-color: var(--bg);}\
	.im_fwd_log_wrap, .im_wall_log_wrap{border-left: 2px solid var(--main_bg);}\
	\
	.chat_onl_inner{background-color: var(--bg);}\
	.chat_tab_wrap:hover, .chat_tab_wrap:hover .chat_tab_imgcont.online.mobile:after, .chat_tab_imgcont.online.mobile:after{background-color: var(--main_bg); border-color: var(--main_bg);}\
	\
	.chat_tab_wrap:hover .chat_tab_imgcont.online:after, .chat_tab_imgcont.online:after{border-color: var(--main_bg);}\
	.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered:last-child, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic:last-child, .nim-dialog:not(.nim-dialog_deleted):hover:last-child{border-bottom: 0)}\
	\
	.tt_default, .tt_default_right{border-color: var(--bgg); background: var(--bgg)}\
	.notify_sources_tt_content .line_cell .info{ color: var(--white_text)}\
	.ui_actions_menu_item{color: var(--white_text)}\
	.ui_actions_menu_item:hover{background-color: var(--main_bg)}\
	.ui_actions_menu{background: var(--bgg); border: 1px solid var(--bgg)}\
	.ui_actions_menu_sep{border: 1px solid var(--main_bg)}\
	\
	#top_profile_menu{background: var(--bgg); border-color: var(--bgg)}\
	.top_profile_mrow{color: var(--white_color)}\
	.top_profile_sep{border-color: var(--main_bg)}\
	\
	.im-create .im-create--tabs, .im-create--table, .im-create--search{background: var(--bg)}\
	.ui_search, .ui_tabs, .olist_item_wrap{border-color: var(--bg)}\
	.olist_item_name{color: var(--text)}\
	.im-create .im-creation--item.im-creation--item_hovered, .im-create .im-creation--item:hover{background: var(--main_bg); border-color: var(--main_bg)}\
	.im-create .im-creation--item.im-creation--item_hovered .olist_item_photo_wrap.online:after, .im-create .im-creation--item:hover .olist_item_photo_wrap.online:after, .online:after{border-color: var(--main_bg)}\
	.ui_grey_block{border-color: var(--main_bg); background: var(--bg)}\
	.button_blue button, .button_gray button, .button_light_gray button, .flat_button{color: var(--white_text); background-color: var(--mark)}\
	.im-page-btn{color: var(--text)}\
	.im-mess.im-mess_selected+.im-mess:before, .im-mess.im-mess_unread+.im-mess:before{background: none}\
	.im-chat-input--editing-head{color: var(--text)}\
	.pv_cont .narrow_column{background-color: var(--bg)}\
	.pv_comments{border-color: var(--main_bg)}\
	.pv_author_block{border-color: var(--main_bg); background-color: var(--bg)}\
	.im-replied--text{color: var(--white_text)}\
	#side_bar .more_div{border-color: var(--main_bg)}\
	\
	/*classic_dialog*/\
	.im-page_classic.im-page .im-page--dialogs, .im-page_classic.im-page .im-page--dcontent, .im-page--chat-header{background: var(--bg)}\
	.nim-dialog.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text{background: var(--main_bg); color: var(--white_text)}\
	.nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_hovered.nim-dialog_unread-out .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_hovered.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted):hover.nim-dialog_unread-out .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted):hover.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text{background-color: var(--bg)}\
	.im-page_classic .im-page--chat-header{border-color: var(--bgg)}\
	.im-page_classic .im-page--chat-header-in, .im-page_classic.im-page .im-page--chat-body-abs{box-shadow: var(--bg)}\
	.im-page_classic.im-page .im-page--chat-body-wrap-inner, .im-page_classic.im-page .im-chat-history-resize, .im-page_classic.im-page .im-page--chat-body-wrap-inner{background: var(--bg)}\
	.im-page_classic.im-page .im-page--chat-input, .im-page_classic.im-page .im-page--chat-body-wrap-inner{border-color: var(--bg)}\
	.im-page--back-btn:hover{background-color: var(--main_bg); background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2216%22%20viewBox%3D%220%200%209%2016%22%20width%3D%229%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m8%2015.9c-.2%200-.4-.1-.6-.3l-7-7c-.3-.3-.3-.9%200-1.2l7-7c.3-.3.9-.3%201.2%200s.3.9%200%201.2l-6.4%206.4%206.4%206.4c.3.3.3.9%200%201.2-.2.2-.4.3-.6.3z%22%20fill%3D%22%23828a99%22%20opacity%3D%22.7%22%2F%3E%3C%2Fsvg%3E") 15px 16px no-repeat}\
	.im-page_classic.im-page .im-page--history_loading, .im-page_classic.im-page .im-page--dialogs-search{box-shadow: var(--bg)}\
	.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered:last-child, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic:last-child, .nim-dialog:not(.nim-dialog_deleted):hover:last-child{border-color: var(--bg)}\
	.im-create.im-create_classic .im-create--table{box-shadow: var(--bg)}\
	.im-create.im-create_classic .im-create--footer{background: var(--bg)}\
	\
	/*feed*/\
	.ui_rmenu_item, .ui_rmenu_subitem{color: var(--text);}\
	body, a, .feed_update_row .post_author, .right_list_header, .feed_updates .explain, .ui_rmenu_item_sel, .ui_rmenu_item_sel:hover, .eltt .eltt_fancy_action, .reply_submit_hint_opts .radiobtn, .apps_feedRightAppsBlock.apps_feedRightAppsBlock_single_app .apps_feedRightAppsBlock__desc, .poster-uploader__title, .ui_rmenu_subitem.ui_rmenu_item_sel, .ui_rmenu_subitem.ui_rmenu_item_sel:hover, .module_header .header_top, .post_upload_dropbox, .wall_tt{color: var(--white_text);}\
	.ui_rmenu_sep, .feed_updates .wall_module .feed_row .post, .poster__open-btn-wrapper, #ads_left.ads_left_empty+.left_menu_nav_wrap, .deep_active .replies .reply_fakebox, .deep_active.wall_module .replies .reply_fakebox, .deep_active.wall_module .wl_replies_block_wrap .reply_fakebox, .deep_active .wl_replies_block_wrap .reply_fakebox, .deep_active .replies .reply_box div.submit_post_field, .deep_active .replies .reply_box div.submit_post_field[contenteditable=true], .deep_active .replies .wl_reply_form_wrap .reply_box div.submit_post_field, .deep_active .replies .wl_reply_form_wrap .reply_box div.submit_post_field[contenteditable=true], .deep_active.wall_module .replies .reply_box div.submit_post_field, .deep_active.wall_module .replies .reply_box div.submit_post_field[contenteditable=true], .deep_active.wall_module .replies .wl_reply_form_wrap .reply_box div.submit_post_field, .deep_active.wall_module .replies .wl_reply_form_wrap .reply_box div.submit_post_field[contenteditable=true], .deep_active.wall_module .wl_replies_block_wrap .reply_box div.submit_post_field, .deep_active.wall_module .wl_replies_block_wrap .reply_box div.submit_post_field[contenteditable=true], .deep_active.wall_module .wl_replies_block_wrap .wl_reply_form_wrap .reply_box div.submit_post_field, .deep_active.wall_module .wl_replies_block_wrap .wl_reply_form_wrap .reply_box div.submit_post_field[contenteditable=true], .deep_active .wl_replies_block_wrap .reply_box div.submit_post_field, .deep_active .wl_replies_block_wrap .reply_box div.submit_post_field[contenteditable=true], .deep_active .wl_replies_block_wrap .wl_reply_form_wrap .reply_box div.submit_post_field, .deep_active .wl_replies_block_wrap .wl_reply_form_wrap .reply_box div.submit_post_field[contenteditable=true], .deep_active .replies .reply .reply_wrap, .deep_active.wall_module .replies .reply .reply_wrap, .deep_active.wall_module .wl_replies_block_wrap .reply .reply_wrap, .deep_active .wl_replies_block_wrap .reply .reply_wrap, .deep_active .replies .replies_wrap_deep, .deep_active.wall_module .replies .replies_wrap_deep, .deep_active.wall_module .wl_replies_block_wrap .replies_wrap_deep, .deep_active .wl_replies_block_wrap .replies_wrap_deep, #submit_post_box:not(.shown):not(.own_field) .poster__open-btn-wrapper, .olist_item_wrap:hover, .olist_topsh .olist_filter_wrap, .poster__toolbar-wrapper, .post_upload_dropbox_inner, .wall_module .replies_list{border-color: var(--main_bg)}\
	.ui_rmenu_item:hover, .ui_rmenu_subitem:hover, .ui_rmenu_item_sel, .ui_rmenu_item_sel:hover{background: none;}\
	.top_notify_countб .top_nav_btn:hover .top_notify_count, .post_suggest, .submit_post, .post_actions_btns, .deep_active .post_replies_header, .deep_active.wall_module .post_replies_header{border-color: var(--bgg)}\
	.stl_active.over_fast #stl_bg, .submit_post, .wall_module .reply_box, .wall_module .reply_fakebox_wrap, .deep_active .replies .reply_fakebox, .deep_active.wall_module .replies .reply_fakebox, .deep_active.wall_module .wl_replies_block_wrap .reply_fakebox, .deep_active .wl_replies_block_wrap .reply_fakebox, .wall_module .reply_form, .deep_active .replies .reply_field_wrap .reply_field, .deep_active .replies .wl_reply_form_wrap .reply_field_wrap .reply_field, .deep_active.wall_module .replies .reply_field_wrap .reply_field, .deep_active.wall_module .replies .wl_reply_form_wrap .reply_field_wrap .reply_field, .deep_active.wall_module .wl_replies_block_wrap .reply_field_wrap .reply_field, .deep_active.wall_module .wl_replies_block_wrap .wl_reply_form_wrap .reply_field_wrap .reply_field, .deep_active .wl_replies_block_wrap .reply_field_wrap .reply_field, .deep_active .wl_replies_block_wrap .wl_reply_form_wrap .reply_field_wrap .reply_field, .poster__toolbar, .poster__slider-arrow:hover, .post_upload_dropbox.dropbox_over .post_upload_dropbox_inner{background-color: var(--bg)}\
	#stl_text, .post_suggest .post_suggest__action_text, .wall_module a.wall_reply_greeting, .deep_active .post_replies_header .post_replies_reorder, .deep_active.wall_module .post_replies_header .post_replies_reorder, .reply_submit_hint_title, .feed_new_posts, .ui_tabs_box .ui_tab_sel .ui_tab_count, .Post__copyrightButton, .poster__new-bkg-btn-layout, .wall_module .replies_open, .wall_module .wr_header, .wall_module .media_desc .a{color: var(--text)}\
	.post_suggest:after, .post_suggest:before, .like_cont, .poster__settings-btn-wrapper{border: none}\
	.deep_active .replies .replies_wrap_deep .replies_deep_collapse:before, .deep_active.wall_module .replies .replies_wrap_deep .replies_deep_collapse:before, .deep_active.wall_module .wl_replies_block_wrap .replies_wrap_deep .replies_deep_collapse:before, .deep_active .wl_replies_block_wrap .replies_wrap_deep .replies_deep_collapse:before, .eltt .eltt_fancy_action:hover, .feed_new_posts:hover, .olist_item_wrap:hover, .poster__slider-arrow, .Post__copyrightButton:hover, .poster-uploader__drop-box:hover, .poster__change-bkg-btn, .ui_toggler.on, .post_upload_dropboxs, .wall_module .replies_open, .wall_module .wr_header{background-color: var(--main_bg)}\
	.eltt{background-color: var(--bg); border-color: var(--bg)}\
	.apps_feedRightAppsBlock__name{color: var(--mark)}\
	.post_top_info_wall_event, .post_top_info_wall_group, .post_top_info_wall_guide, .post_top_info_wall_mention, .post_top_info_wall_podcast, .post_top_info_wall_poll_vote, .post_top_info_wall_reply, .post_top_info_wall_vkgo, .poster__slider-arrow._right, .poster__slider-arrow._left{box-shadow: var(--main_bg)}\
	.Post__copyrightButton{position: inherit}\
	.wall_tt .like_tt_bottom{background-color: var(--bgg)}\
	.wall_tt .like_tt_bottom{border-color: var(--bg)}\
	\
	/*minidialog*/\
	.fc_tab_head{background-color: #000; border: 1px solid var(--one_bg)}\
	#fc_contacts, .fc_content{background: var(--one_bg)}\
	#fc_ctabs_cont{border: none}\
	div.fc_clist_filter_wrap{background: var(--one_bg); border-top: none}\
	.fc_tab_pointer:after{border-left-color: var(--white_text)}\
	a.fc_contact_over, .fc_tab, div.fc_tab_txt, .ms_items_more{background: var(--one_bg); border: none;}\
	span.fc_contact_photo.online.mobile:after, a.fc_contact_over span.fc_contact_photo.online.mobile:after{background-color: var(--one_bg)}\
	span.fc_contact_photo.online:after, a.fc_contact_over span.fc_contact_photo.online:after{border: var(--one_bg)}\
	.fc_msgs, .fc_msgs_out .fc_msgs, .media_selector .ms_items_more .ms_item:hover{background-color: var(--main_bg); border: none}\
	.fc_tab_notify{background-color: var(--main_bg); border: 1px solid var(--main_bg)}\
	.fakeinput:focus, div[contenteditable=true]:focus, input.big_text:focus, input.dark:focus, input.search:focus, input.text:focus, textarea:focus{border-color: var(--main_bg)}\
	.chat_cont_sh_bottom, .chat_cont_sh_top{background: linear-gradient(180deg, rgba(216,223,230,0), var(--main_bg) 80%)}\
	.fc_msgs_unread{background-color: var(--bg)}\
	\
	/*smiles*/\
	.emoji_tt_wrap{background-color: var(--one_bg); border: 1px solid var(--main_bg)}\
	.emoji_cat_title, .ui_scroll_default_theme.ui_scroll_emoji_theme>.ui_scroll_overflow>.ui_scroll_shadow_bottom, .ui_scroll_default_theme.ui_scroll_emoji_theme>.ui_scroll_overflow>.ui_scroll_shadow_top{background: none}\
	.emoji_tabs{background: var(--main_bg)}\
	.emoji_tab_sel, .emoji_tab_sel:hover{background: var(--one_bg)}\
	.emoji_bg, .emoji_tabs_l_s, .emoji_tabs_r_s{background: var(--main_bg)}\
	.emoji_tabs_l_sc, .emoji_tabs_r_sc{width: 0; height: 0}\
	.emoji_tabs_l_s:hover, .emoji_tabs_r_s:hover, .emoji_shop:hover, .emoji_tab:hover{background: var(--bg)}\
	\
	/*dop_window*/\
	.box_title_wrap.box_grey, .box_body, .owner_photo_additional, .ui_tabs.ui_tabs_box, .box_controls, .box_title_wrap, .im-mess.im-mess_light{background: var(--bg)}\
	.box_title_wrap.box_grey .box_title, .owner_photo_additional, .ui_tab_sel, .ui_tabs .ui_tab_sel, .ui_tabs_box .ui_tab_sel, .box_controls .flat_button.secondary, .flat_button.secondary.button_light{color: var(--white_text)}\
	.box_title_wrap.box_grey, .owner_photo_additional, .ui_tabs.ui_tabs_box{border-color: var(--main_bg)}\
	.im-mess.im-mess_search:hover, .im_msg_audiomsg .audio-msg-track:not(.audio-msg-player):hover{background: var(--main_bg)}\
	.box_controls{border-top: 1px solid var(--bg)}\
	.box_controls .flat_button.secondary:hover, .flat_button.secondary.button_light:hover{background-color: var(--main_bg); color: var(--white_text)}\
	.im-mess .im-mess--btn{color: var(--text)}\
	\
	/*search*/\
	.ts_cont_wrap{background: var(--bg)}\
	a.ts_contact.active, a.ts_search_link.active, .ts_contact.active .ts_contact_photo.online.mobile:after, .ts_contact_photo.online.mobile:after{background-color: var(--main_bg)}\
	.ts_contact.active, .ts_contact_photo.online:after{border-color: var(--main_bg)}\
	.ts_contact_name{color: var(--text)}\
	input#ts_input{color: var(--white_text)}\
	.im-page-pinned{background-color: var(--bg); border-color: var(--main_bg)}\
	.im-page .im-page--header, .im-page .im-page--search-header{background: var(--bg)}\
	.button_gray button, .flat_button.secondary{background-color: var(--main_bg); color: var(--white_text)}\
	.button_gray button.hover, .button_gray button:hover, .flat_button.secondary.hover, .flat_button.secondary:hover{background-color: var(--main_bg)}\
	\
	/*gs*/\
	.im-audio-message-input{border-color: var(--main_bg); background: var(--bg)}\
	.im-audio-message-input .im-audio-message-track{background-color: var(--main_bg)}\
	\
	/*calendar*/\
	.cal_table .month, .cal_table .month_arr{background-color: var(--bg)}\
	.cal_table .daysofweek{background-color: var(--main_bg)}\
	.cal_table .next_month_day, .cal_table .prev_month_day, .cal_table .day{background-color: var(--main_bg); color: var(--white_text)}\
	.cal_clear{background: var(--bg); border-color: var(--bg)}\
	.im_cal_clear_lnk{color: var(--text)}\
	.cal_table .day.sel, .cal_table .day.sel:hover{background-color: var(--text)}\
	.cal_table .day:hover:not(.inactive_day){background-color: var(--bg)}\
	.cal_table>tbody, .cal_table>thead{border: none; background-color: none}\
	\
	/*info_group*/\
	.PopupHeader{background: var(--bgg)}\
	.ChatSettings__content, .ChatSettingsInfo, .List, .ChatSettingsMembersWidget, .Button--mobile, input.ChatSettingsMembersWidget__search{background: var(--bg)}\
	.ChatSettingsInfo{box-shadow: 0 1px 0 var(--bg)}\
	.List--border, .ChatSettingsMembersWidget, .Button--mobile{box-shadow: 0 1px 0 var(--bg), 0 -1px 0 var(--bg)}\
	.ChatSettingsInfo__title, .Tabs__item--active>*, input.ChatSettingsMembersWidget__search{color: var(--white_text)}\
	.Tabs, .ChatSettingsMembersWidget--search .ChatSettingsMembersWidget__header{border-color: var(--bg)}\
	.ChatSettingsMembersWidget__add, .Link{color: var(--text)}\
	.Button--link.ChatSettings__criticalAction{color: var(--like_mark)}\
	.Button--mobile:hover, .ListItem--active, .ListItem--can-be-hovered.ListItem--selectable:hover, .EditableLabel:hover .EditableLabel__text{background: var(--main_bg)}\
	\
	/*вложения*/\
	.wk_history_tabs, div#wk_history_wall{background: var(--bg)}\
	.photos_container .photos_row{background-color: var(--bg); border-color: var(--bg)}\
	div#wk_history_more_progress, div#wk_history_more_link{border-color: var(--main_bg)}\
	div#wk_history_more_link, .audio_row .audio_row__performers a, .page_doc_row .page_doc_title, .links-list__title{color: var(--text)}\
	#wk_box{background: var(--bg)}\
	.audio_row:hover:not(.audio_row__current) .audio_row_content, .links-list__item:hover{background-color: var(--main_bg)}\
	\
	/*setting_menu*/\
	.tabbed_box .summary_tab_sel .summary_tab2 {background-color: var(--main_bg)}\
	.tabbed_box .summary_tab_sel .summary_tab3 {color: var(--white_text)}\
	.tabbed_box .summary_tabs, .olist_botsh .box_controls{border-color: var(--bg)}\
	\
	/*stickers*/\
	.sticker_hints_tt{background-color: var(--bg); border-color: var(--main_bg)}\
	.emoji_sticker_item.over, .emoji_sticker_item:hover{background: var(--main_bg)}\
	.sticker_hints_arrow{background-color: var(--bg); border-color: var(--bg)}\
	.sticker_hints_arrow:hover{background: var(--bgg)}\
	\
	/*photos*/\
	.photos_choose_upload_area, .web_cam_photo{background: var(--bg); color: var(--white_text)}\
	.photo_upload_separator{background-color: var(--main_bg)}\
	.photos_choose_upload_area:hover, .web_cam_photo:hover, .photos_container_albums .photos_album_thumb{background: var(--main_bg)}\
	.photos_choose_bottom{border-color: var(--bg); background-color: var(--bg)}\
	.choose_search_cont input{background: url(/images/search_icon.png) no-repeat}\
	.photos_choose_row{background: var(--main_bg)}\
	.wall_module .reply_box, .wall_module .reply_fakebox_wrap{border-color: var(--main_bg)}\
	\
	/*video*/\
	.video_choose_upload_area, .video_add_external{background-color: var(--bg); color: var(--white_text)}\
	.video_choose_upload_area:hover, .video_add_external:hover, .video_choose_upload_separator, .video_item .video_item_thumb_wrap, .ui_search_sugg_list .ui_search_suggestion_selected{background-color: var(--main_bg)}\
	.ui_search_sugg_list, .ui_search, .ui_search_new.ui_search_field_empty .ui_search_button_search, .video_choosebox_bottom{background-color: var(--bg)}\
	.ui_search_sugg_list, .ui_search_new .ui_search_input_inner, .ui_search_new .ui_search_button_search, .video_choosebox_bottom{border-color: var(--main_bg)}\
	.ui_search_sugg_list{background-color: var(--bg)}\
	\
	/*document*/\
	.docs_choose_upload_area{background-color: var(--bg); color: var(--white_text)}\
	.docs_choose_rows .docs_item:hover, .docs_choose_upload_area:hover{background-color: var(--main_bg)}\
	.docs_item, .docs_choose_rows .docs_item, .ui_search.ui_search_fixedborder-color: var(--main_bg)}\
	\
	/*surprise*/\
	.gifts_box_header{background: var(--bg)}\
	a b, b a{color: var(--text)}\
	.gifts_section_row, div.wdd.wdd_focused, .wdd_list{border-color: var(--main_bg)}\
	.box_title .back:hover{background-color: var(--main_bg)}\
	.gift_free, .gift_price{backgroun-color: var(--white_text); color: var(--bgg)}\
	img.gift_img{border-radius: 10%}\
	.GiftsStickerPackPreviewTooltip__button{background-color: var(--bgg); border-color: var(--bg); color: var(--white_text)}\
	.im_stickers_buy_header, div.wdd{background-color: var(--bg); border-color: var(--main_bg)}\
	.im_stickers_close:after{background: url(/images/icons/cross.png) no-repeat}\
	.im_stickerpack_name, .subheader, h4.subheader, .wddi_over .wddi_sub{color: var(--white_text)}\
	.wddi, .wddi_over, input.wdd_text.fl_l{background: var(--bg)}\
	.wddi_text{color: var(--text)}\
	.flat_button.ui_load_more_btn{border-color: var(--main_bg)}\
	.gift_loader img{border-radius: 10%}\
	\
	/*Your balance*/\
	#payments_box, .payments_getvotes_amounts .radiobtn b{color: var(--white_text)}\
	.payments_getvotes_method_title, h2.payments_getvotes_title, .payments_offer_row_title, .payments_offers_view_title{color: var(--text)}\
	.payments_getvotes_method_opt.payments_getvotes_active_row, .payments_getvotes_method_opt:hover, #payments_box .payments_about_votes, .payments_about_votes{background-color: var(--main_bg)}\
	#payments_box .payments_about_votes, .payments_about_votes, h2.payments_getvotes_title, .box_error, .box_msg, .box_msg_gray, .error, .info_msg, .msg, .ok_msg{border-color: var(--main_bg)}\
	.box_msg, .box_msg_gray, .msg{background-color: var(--bg)}\
	.payments_getvotes_ps_row.payments_getvotes_active_row, .payments_getvotes_ps_row:hover{background-color: var(--main_bg)}\
	.payments_offer_row, .payments_offer_row .payments_offer_hover, .payments_offer_row:hover{border-color: var(--main_bg)}\
	.payments_offer_row .payments_offer_hover, .payments_offer_row:hover{background-color: var(--main_bg)}\
	\
	/*Money*/\
	.payments_money_transfer_amount_wrap, .payments_money_transfer_comment{background-color: var(--main_bg); border-color: var(--bg)}\
	input#transfer_amount{background-color: var(--main_bg); color: var(--white_text)}\
	#payments_box.payments_money_transfer_box .payments_money_transfer_label{color: var(--text)}\
	.selector_container table.selector_table, .result_list {border-color: var(--main_bg)}\
	#payments_box.payments_money_transfer_box .payments_money_transfer_link_copy_input, .selector_container td.selector input.focused, .selector_container td.selector input.selected, .result_list ul li{color: var(--white_text); -webkit-text-fill-color: var(--white_text)}\
	.selector_container, .result_list ul{background-color: var(--main_bg)}\
	.payments_transfer_dd_link{color: var(--text)}\
	.result_list ul li.active{background: var(--bg); color: var(--white_text)}\
	\
	/*qr-code возможно не нужно его красить*/\
	rect#rect-0, path#empty-0, path#b-0, path#r-0, path#l-0, path#t-0, path#lt-0, path#lb-0, path#rb-0, path#rt-0, path#n_lt-0, path#n_lb-0, path#n_rt-0, path#n_rb-0, path#point-0{fill: var(--white)}\
	\
	/*Уведомления*/\
	.feedback_row, .feedback_sticky_row, .top_notify_cont .top_notify_header, #top_notify_wrap, .top_notify_show_all, .flist_item_wrap, .flist_item_wrap:hover{border-color: var(--main_bg)}\
	.feedback_row_wrap.unread:not(.feedback_row_touched), .top_notify_cont .top_notify_header, #top_notify_wrap, .top_notify_show_all{background-color: var(--bg)}\
	.top_notify_cont .feedback_header, .feedback_header b, .top_notify_cont .top_notify_header, .top_notify_header{color: var(--white_text)}\
	.feedback_header .author, .feedback_header .group_link, .feedback_header .mem_link{color: var(--text)}\
	.top_notify_show_all:hover, .notify_sources_tt_content .content:not(:hover) .line_cell.selected, .notify_sources_tt_content .line_cell:hover, .top_notify_cont .feedback_row:not(.dld).hover, .top_notify_cont .feedback_row:not(.dld):hover, .feedback_row_clickable:not(.feedback_row_touched):hover, .flist_item_wrap:hover{background-color: var(--main_bg)}\
	.ui_scroll_default_theme>.ui_scroll_bar_container>.ui_scroll_bar_outer>.ui_scroll_bar_inner{background: var(--white_text)}\
	\
	/*Статья*/\
	.article_ed_layer, .article_ed_layer .article_ed_layer__header {background-color: var(--bg)}\
	.article_ed_layer .article_ed_layer__header .article_ed_layer__publish{color: var(--text)}\
	.article_ed_layer .article_ed_layer__list_item .article_ed_layer__list_item_title{color: var(--white_text)}\
	.article_ed_layer .article_ed_layer__publish_settings .article_ed_layer__publish_settings_header{border-color: var(--main_bg)}\
	.article_ed_layer .article_ed_layer__list_item:not(.article_ed_layer__list_item--selected):hover, .article_ed_layer .article_ed_layer__list_item.article_ed_layer__list_item--selected{background-color: var(--main_bg)}\
	\
	/*Your profile*/\
	.page_name, h1.page_name, .profile_warning_row, .page_actions_cont.narrow .page_actions_header_inner{color: var(--white_text)}\
	.current_audio, .page_counter .count, .wk_wall_archive__month_menu, .wk_wall_archive__tabs_menu, .wall_copy_more, .wall_post_attaches_more, .wall_post_more, .wall_reply_more, .page_actions_item{color: var(--text)}\
	.wide_column .page_top, .counts_module, .module, .wk_wall_archive__tabs .ui_tabs, .profile_info_block, .page_status_editor .editor, .page_actions_wrap, .page_actions_inner{border-color: var(--main_bg)}\
	.my_current_info:hover, .no_current_info:hover, .profile_more_info_link:hover{background-color: var(--main_bg)}\
	.wk_wall_archive__tabs, .profile_info_edit, .profile_info_header, .page_status_editor .editor, .page_actions_wrap, .page_actions_header{background-color: var(--bg)}\
	\
	/*DONOS*/\
	\
	\
	'
}
// .im_msg_media.im_msg_media_link, .thumbed_link__thumb, .thumbed_link__label, .thumbed_link--chat-invitation НА ВСЯКИЙ СЛУЧАЙ

one_bg = '#0d0e0d'
bg = '#191b19'
main_bg = '#292c29'
text = '#6392bd'
good_mark ='#4aba4a'
mark = '#6ba2e7'
like_mark = '#f73c4a'

bgg = '#111111'
white_text = '#dee3e7'
