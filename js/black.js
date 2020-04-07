window.setTimeout(function () {
	try {
		main();
		delinterval = setInterval(updtime, 60000);
	} catch (e) {}
}, 3000)


function main() {
	
	console.log('ВК был изменён')

	if (document.querySelector('.menu_style_btn') === null) {
		const btn_style = document.createElement('div');
		const btn = document.querySelector('.head_nav_item.fl_r');
		btn_style.className = 'menu_style_btn'
		btn.appendChild(btn_style);
	}

	const body_bg = document.getElementsByTagName('body');
	const border_dialog = document.querySelectorAll('.page_block');

	const my_styles = document.createElement('style');
	my_styles.className = 'style_theme';

	body_bg[0].appendChild(my_styles);

	my_styles.innerHTML = 
	`body{background: var(--bgg)}
	#page_header_cont .back{background: var(--one_bg); border-color:var(--one_bg)}
	/*dialog*/
	#side_bar ol li .left_row:hover, .dev_top_link.sel, .dev_top_link.sel:hover, .dev_home_link:hover, .dev_top_link:hover, .top_nav_link.active, .top_nav_link:hover, .top_nav_btn.active, .top_nav_btn:hover, .top_audio_player.active, .top_audio_player:hover, .dev_top_input{background: none;}
	#side_bar ol li .left_row, a.im-page--dialogs-filter, a._im_start_new, .im-mess-stack .im-mess-stack--content .im-mess-stack--pname>a, a.im-page--title-main-inner._im_page_peer_name{color: var(--text)}
	.page_block, .im-page .im-page--dialogs-footer.ui_grey_block, .im-page--header.ui_search._im_dialogs_search, .ui_search.ui_search_field_empty._im_dialogs_search_input.im-page--dialogs-search.ui_search_custom._wrap.ui_search_old, .ui_search_input_block, .im-page--mess-search._im_mess_search, .nim-dialog .nim-dialog--content, .im-page--chat-header-in, .im-page--title-wrapper, .im-page--toolsw, .im-chat-input.clear_fix._im_chat_input_parent, .im-mess.im-mess_selected:last-child:before, .im-mess.im-mess_unread:last-child:before, .im-page .im-page--history-new-bar, .thumbed_link__thumb, .thumbed_link__label, .thumbed_link--chat-invitation, .im-page .im-page--history-new-bar:after, .im-page .im-page--history-new-bar:before, .im-page .im-page--history-new-bar>span{background-color: var(--bg); box-shadow: none; border: none;}
	.im-mess--text.wall_module._im_log_body, .thumbed_link--chat-invitation .thumbed_link__title, .im-page .im-search-results-head, a.im-popular--name, span._im_dialog_link, span.im-page--selected-messages-count{color: var(--white_text)}
	.nim-dialog.nim-dialog_unread-out.nim-dialog_muted:not(.nim-dialog_failed) .nim-dialog--unread, .nim-dialog.nim-dialog_unread-out:not(.nim-dialog_failed) .nim-dialog--unread, .nim-dialog.nim-dialog_unread.nim-dialog_unread-out:not(.nim-dialog_failed) .nim-dialog--unread{background-color: var(--mark)}
	.nim-dialog .nim-dialog--preview-attach{color: var(--text)}
	.im-page .im-page--top-date-bar{background: var(--main_bg); color:var(--white_text); border: none}
	input.ui_search_field{color: var(--white_text)}
	.im-page .im-page--mess-search{color: var(--text)}
	.im-page .im-page--mess-search:hover{color: var(--text); background: var(--main_bg)}
	
	.nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_classic.nim-dialog_unread, .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_hovered, .nim-dialog:not(.nim-dialog_deleted).nim-dialog:hover, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered+.nim-dialog, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected+.nim-dialog, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic+.nim-dialog, .nim-dialog:not(.nim-dialog_deleted):hover+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted):hover+.nim-dialog, .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_selected.nim-dialog_classic.nim-dialog_unread, .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_selected.nim-dialog_hovered, .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_selected:hover, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered+.nim-dialog.nim-dialog_selected, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered.nim-dialog_selected+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected+.nim-dialog, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected:hover+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic+.nim-dialog.nim-dialog_selected, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic.nim-dialog_selected+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted):hover+.nim-dialog.nim-dialog_selected{border-top: solid 1px var(--bg);}
	.nim-dialog._im_dialog:hover, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_muted.nim-dialog_selected, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected{background-color: var(--bg); border:none;}
	.nim-dialog .nim-dialog--photo, .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_muted.nim-dialog_selected .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_muted.nim-dialog_selected .nim-dialog--photo, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected .nim-dialog--photo, .nim-peer{border-radius: 50%; background-color: var(--bg); border-color: var(--bg);}
	li.im-mess._im_mess.im-mess_unread._im_mess_unread.im-mess_out.im-mess_editable, .im-mess.im-mess_selected:not(.im-mess_is_editing), .im-mess.im-mess_selected:not(.im-mess_is_editing):hover, input.text.ts_input, input.text.ts_input:focus{background-color: var(--main_bg); border-color:none;}
	
	.im-chat-input .im-chat-input--txt-wrap, .fakeinput, input.big_text, input.dark, input.search, input.text, textarea{background-color: var(--bg); border-color: var(--main_bg); color: var(--white_text);}
	
	.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic, div[contenteditable=true],  .nim-dialog:not(.nim-dialog_deleted):hover{background-color: var(--bg);}
	.im_fwd_log_wrap, .im_wall_log_wrap{border-left: 2px solid var(--main_bg);}
	
 	.im-mess.im-mess_unread:not(.im-mess_light){background-color: var(--main_bg)}
	.chat_onl_inner, .nim-peer.nim-peer_search.online.mobile:after{background-color: var(--bg);}
	.chat_tab_wrap:hover, .chat_tab_wrap:hover .chat_tab_imgcont.online.mobile:after, .chat_tab_imgcont.online.mobile:after{background-color: var(--main_bg); border-color: var(--main_bg);}
	
	.chat_tab_wrap:hover .chat_tab_imgcont.online:after, .chat_tab_imgcont.online:after{border-color: var(--main_bg);}
	.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered:last-child, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic:last-child, .nim-dialog:not(.nim-dialog_deleted):hover:last-child{border-bottom: 0)}
	
	.im-dropbox--rect{border-color: var(--white_text)}
	.tt_default, .tt_default_right{border-color: var(--bgg); background: var(--bgg)}
	.notify_sources_tt_content .line_cell .info, .im-dropbox--msg{ color: var(--white_text)}
	.ui_actions_menu_item, .im-fwd.im-fwd_msg .im-fwd--messages{color: var(--white_text)}
	.ui_actions_menu{background-color: var(--main_bg)}
	.ui_actions_menu_sep, .feed_list_name_wrap, .ui_actions_menu{border-color: var(--main_bg)}
	.ui_actions_menu_item:hover, .im-dropbox--rect.dropbox_over, .ui_actions_menu_item.feed_custom_list:hover, .ui_actions_menu_item.feed_new_list:hover {background-color: var(--hover)}
	
	#top_profile_menu{background: var(--main_bg); border-color: var(--main_bg)}
	.top_profile_mrow{color: var(--white_color)}
	.top_profile_sep{border-color: var(--hover)}
	
	.MessageForward__content{background-color: var(--bgg)}
	.im-create .im-create--tabs, .im-create--table, .im-create--search{background: var(--bg)}
	.ui_search, .ui_tabs, .olist_item_wrap{border-color: var(--bg)}
	.olist_item_name{color: var(--text)}
	.im-create .im-creation--item.im-creation--item_hovered, .im-create .im-creation--item:hover{background: var(--main_bg); border-color: var(--main_bg)}
	.im-create .im-creation--item.im-creation--item_hovered .olist_item_photo_wrap.online:after, .im-create .im-creation--item:hover .olist_item_photo_wrap.online:after, .online:after{border-color: var(--main_bg)}
	.ui_grey_block{border-color: var(--main_bg); background: var(--bg)}
	.button_blue button, .button_gray button, .button_light_gray button, .flat_button{color: var(--white_text)}
	.im-page-btn{color: var(--text)}
	.im-mess.im-mess_selected+.im-mess:before, .im-mess.im-mess_unread+.im-mess:before{background: none}
	.im-chat-input--editing-head, .flat_button.im-top-banner--button-tertiary, .im-top-banner--button-tertiary{color: var(--text)}
	.pv_cont .narrow_column, .im-dropbox, .Avatar--online.Avatar--mobile:after{background-color: var(--bg)}
	.pv_comments{border-color: var(--main_bg)}
	.pv_author_block{border-color: var(--main_bg); background-color: var(--bg)}
	.im-replied--text, .medadd_c_linkimg_big .medadd_c_linkhead{color: var(--white_text)}
	#side_bar .more_div, input.BlockSearchInput, .ListItem--active .ListItem__main, .ListItem--can-be-hovered.ListItem--selectable:hover .ListItem__main, .ListItem--active, .ListItem--can-be-hovered.ListItem--selectable:hover{border-color: var(--main_bg)}
	.nim-dialog .nim-dialog--photo, .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_muted.nim-dialog_selected .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_muted.nim-dialog_selected .nim-dialog--photo, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected .nim-dialog--photo{border-radius: 0}
	.nim-dialog.nim-dialog_failed.nim-dialog_muted .nim-dialog--unread, .nim-dialog.nim-dialog_unread.nim-dialog_muted .nim-dialog--unread, .nim-dialog.nim-dialog_unread.nim-dialog_prep-injected.nim-dialog_muted .nim-dialog--unread{background: var(--text)}
	.medadd_c_linkcon, .ListItem--border:before, .im-chat-input .im-chat-input--text, .im-top-banner, .im-mess.im-mess_was_edited.im-mess_unread.im-mess_nobg, .wddi_no{background-color: var(--main_bg)}
	.medadd_inline_editable:hover {background-color: #e7ebf0; color: var(--bg)}
	.Entity__title, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--preview.nim-dialog--preview-attach, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--preview.nim-dialog--preview-attach, .nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--preview.nim-dialog--preview-attach{color: var(--text)}
	.Avatar--online:after, .im-navigation__button{border-color: var(--bg)}
	.im-navigation__button{box-shadow: rgba(0,0,0,0.7)}
	.im-navigation--to-end .im-navigation__button{background: var(--bg) url("data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%227%22%20viewBox%3D%220%200%2014%207%22%20width%3D%2214%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1.64.232c-.424-.354-1.055-.296-1.408.128s-.296%201.055.128%201.408l6%205c.371.309.91.309%201.28%200l6-5c.424-.354.482-.984.128-1.408s-.984-.482-1.408-.128l-5.36%204.467z%22%20fill%3D%22%239db4cc%22%2F%3E%3C%2Fsvg%3E") center 17px no-repeat}

	/*hyperlink*/
	.media_link__label{background: var(--main_bg)}
	.media_link__title{color: var(--white_text)}
	
	/*classic_dialog*/
	.im-page_classic.im-page .im-page--dialogs, .im-page_classic.im-page .im-page--dcontent, .im-page--chat-header{background: var(--bg)}
	.nim-dialog.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text{background: var(--main_bg); color: var(--white_text)}
	.nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_hovered.nim-dialog_unread-out .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_hovered.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted):hover.nim-dialog_unread-out .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted):hover.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text{background-color: var(--bg)}
	.im-page_classic .im-page--chat-header{border-color: var(--bgg)}
	.im-page_classic .im-page--chat-header-in, .im-page_classic.im-page .im-page--chat-body-abs{box-shadow: var(--bg)}
	.im-page_classic.im-page .im-page--chat-body-wrap-inner, .im-page_classic.im-page .im-chat-history-resize, .im-page_classic.im-page .im-page--chat-body-wrap-inner{background: var(--bg)}
	.im-page_classic.im-page .im-page--chat-input, .im-page_classic.im-page .im-page--chat-body-wrap-inner{border-color: var(--bg)}
	.im-page--back-btn:hover{background-color: var(--main_bg); background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2216%22%20viewBox%3D%220%200%209%2016%22%20width%3D%229%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m8%2015.9c-.2%200-.4-.1-.6-.3l-7-7c-.3-.3-.3-.9%200-1.2l7-7c.3-.3.9-.3%201.2%200s.3.9%200%201.2l-6.4%206.4%206.4%206.4c.3.3.3.9%200%201.2-.2.2-.4.3-.6.3z%22%20fill%3D%22%23828a99%22%20opacity%3D%22.7%22%2F%3E%3C%2Fsvg%3E") 15px 16px no-repeat}
	.im-page_classic.im-page .im-page--history_loading, .im-page_classic.im-page .im-page--dialogs-search{box-shadow: var(--bg)}
	.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered:last-child, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic:last-child, .nim-dialog:not(.nim-dialog_deleted):hover:last-child{border-color: var(--bg)}
	.im-create.im-create_classic .im-create--table{box-shadow: var(--bg)}
	.im-create.im-create_classic .im-create--footer{background: var(--bg)}
	
	/*feed*/
	.ui_rmenu_sliding .ui_rmenu_slider{background-color: var(--text)}
	.ui_rmenu_item_sel, .ui_rmenu_item_sel:hover{border-color: var(--text)}
	.ui_rmenu_item, .ui_rmenu_subitem, .bookmark_tag, .nim-dialog.nim-dialog_typing .nim-dialog--typing, .im-replied--author-link{color: var(--text);}
	body, a, .feed_update_row .post_author, .right_list_header, .feed_updates .explain, .ui_rmenu_item_sel, .ui_rmenu_item_sel:hover, .eltt .eltt_fancy_action, .reply_submit_hint_opts .radiobtn, .apps_feedRightAppsBlock.apps_feedRightAppsBlock_single_app .apps_feedRightAppsBlock__desc, .poster-uploader__title, .ui_rmenu_subitem.ui_rmenu_item_sel, .ui_rmenu_subitem.ui_rmenu_item_sel:hover, .module_header .header_top, .post_upload_dropbox, .wall_tt, .tt_w, div[contenteditable=true], .ui_gallery_wall_cards .wall_card__title_link, .audio__title_inner, .audio_row__title {color: var(--white_text);}
	.ui_rmenu_sep, .feed_updates .wall_module .feed_row .post, .poster__open-btn-wrapper, #ads_left.ads_left_empty+.left_menu_nav_wrap, .deep_active .replies .reply_fakebox, .deep_active.wall_module .replies .reply_fakebox, .deep_active.wall_module .wl_replies_block_wrap .reply_fakebox, .deep_active .wl_replies_block_wrap .reply_fakebox, .deep_active .replies .reply_box div.submit_post_field, .deep_active .replies .reply_box div.submit_post_field[contenteditable=true], .deep_active .replies .wl_reply_form_wrap .reply_box div.submit_post_field, .deep_active .replies .wl_reply_form_wrap .reply_box div.submit_post_field[contenteditable=true], .deep_active.wall_module .replies .reply_box div.submit_post_field, .deep_active.wall_module .replies .reply_box div.submit_post_field[contenteditable=true], .deep_active.wall_module .replies .wl_reply_form_wrap .reply_box div.submit_post_field, .deep_active.wall_module .replies .wl_reply_form_wrap .reply_box div.submit_post_field[contenteditable=true], .deep_active.wall_module .wl_replies_block_wrap .reply_box div.submit_post_field, .deep_active.wall_module .wl_replies_block_wrap .reply_box div.submit_post_field[contenteditable=true], .deep_active.wall_module .wl_replies_block_wrap .wl_reply_form_wrap .reply_box div.submit_post_field, .deep_active.wall_module .wl_replies_block_wrap .wl_reply_form_wrap .reply_box div.submit_post_field[contenteditable=true], .deep_active .wl_replies_block_wrap .reply_box div.submit_post_field, .deep_active .wl_replies_block_wrap .reply_box div.submit_post_field[contenteditable=true], .deep_active .wl_replies_block_wrap .wl_reply_form_wrap .reply_box div.submit_post_field, .deep_active .wl_replies_block_wrap .wl_reply_form_wrap .reply_box div.submit_post_field[contenteditable=true], .deep_active .replies .reply .reply_wrap, .deep_active.wall_module .replies .reply .reply_wrap, .deep_active.wall_module .wl_replies_block_wrap .reply .reply_wrap, .deep_active .wl_replies_block_wrap .reply .reply_wrap, .deep_active .replies .replies_wrap_deep, .deep_active.wall_module .replies .replies_wrap_deep, .deep_active.wall_module .wl_replies_block_wrap .replies_wrap_deep, .deep_active .wl_replies_block_wrap .replies_wrap_deep, #submit_post_box:not(.shown):not(.own_field) .poster__open-btn-wrapper, .olist_item_wrap:hover, .olist_topsh .olist_filter_wrap, .poster__toolbar-wrapper, .post_upload_dropbox_inner, .wall_module .replies_list, .deep_active .replies .replies_wrap_deep .reply_media_preview, .deep_active.wall_module .replies .replies_wrap_deep .reply_media_preview, .deep_active.wall_module .wl_replies_block_wrap .replies_wrap_deep .reply_media_preview, .deep_active .wl_replies_block_wrap .replies_wrap_deep .reply_media_preview, .deep_active .replies .replies_wrap_deep .reply_box_inner_wrap .reply_fakebox, .deep_active.wall_module .replies .replies_wrap_deep .reply_box_inner_wrap .reply_fakebox, .deep_active.wall_module .wl_replies_block_wrap .replies_wrap_deep .reply_box_inner_wrap .reply_fakebox, .deep_active .wl_replies_block_wrap .replies_wrap_deep .reply_box_inner_wrap .reply_fakebox, span.im-to-end__button, .bookmark_footer, .wall_module .replies_side, .apps_feedRightAppsBlockFriendsList__imgWrap{border-color: var(--main_bg)}
	.ui_rmenu_item_sel, .ui_rmenu_item_sel:hover{background: none;}
	.top_notify_countб .top_nav_btn:hover .top_notify_count, .post_suggest, .submit_post, .post_actions_btns, .deep_active .post_replies_header, .deep_active.wall_module .post_replies_header{border-color: var(--bgg)}
	.stl_active.over_fast #stl_bg, .submit_post, .wall_module .reply_box, .wall_module .reply_fakebox_wrap, .deep_active .replies .reply_fakebox, .deep_active.wall_module .replies .reply_fakebox, .deep_active.wall_module .wl_replies_block_wrap .reply_fakebox, .deep_active .wl_replies_block_wrap .reply_fakebox, .wall_module .reply_form, .deep_active .replies .reply_field_wrap .reply_field, .deep_active .replies .wl_reply_form_wrap .reply_field_wrap .reply_field, .deep_active.wall_module .replies .reply_field_wrap .reply_field, .deep_active.wall_module .replies .wl_reply_form_wrap .reply_field_wrap .reply_field, .deep_active.wall_module .wl_replies_block_wrap .reply_field_wrap .reply_field, .deep_active.wall_module .wl_replies_block_wrap .wl_reply_form_wrap .reply_field_wrap .reply_field, .deep_active .wl_replies_block_wrap .reply_field_wrap .reply_field, .deep_active .wl_replies_block_wrap .wl_reply_form_wrap .reply_field_wrap .reply_field, .poster__toolbar, .poster__slider-arrow:hover, .post_upload_dropbox.dropbox_over .post_upload_dropbox_inner, .search_filters_minimized_text, .post_upload_dropbox, .im-to-end:focus .im-to-end__button, .im-to-end:hover .im-to-end__button, .wall_module .like_tt_bottom_page_friend_reply, .bookmark_footer, .wall_module .replies_side{background-color: var(--bg)}
	#stl_text, .post_suggest .post_suggest__action_text, .wall_module a.wall_reply_greeting, .deep_active .post_replies_header .post_replies_reorder, .deep_active.wall_module .post_replies_header .post_replies_reorder, .reply_submit_hint_title, .feed_new_posts, .ui_tabs_box .ui_tab_sel .ui_tab_count, .Post__copyrightButton, .poster__new-bkg-btn-layout, .wall_module .replies_open, .wall_module .wr_header, .wall_module .media_desc .a{color: var(--text)}
	.post_suggest:after, .post_suggest:before, .like_cont, .poster__settings-btn-wrapper{border: none}
	.deep_active .replies .replies_wrap_deep .replies_deep_collapse:before, .deep_active.wall_module .replies .replies_wrap_deep .replies_deep_collapse:before, .deep_active.wall_module .wl_replies_block_wrap .replies_wrap_deep .replies_deep_collapse:before, .deep_active .wl_replies_block_wrap .replies_wrap_deep .replies_deep_collapse:before, .eltt .eltt_fancy_action:hover, .feed_new_posts:hover, .olist_item_wrap:hover, .poster__slider-arrow, .Post__copyrightButton:hover, .poster-uploader__drop-box:hover, .poster__change-bkg-btn, .ui_toggler.on, .ui_toggler, .post_upload_dropboxs, .wall_module .replies_open, .wall_module .wr_header, .tabbed_box .summary_tab .summary_tab3:hover, .tabbed_box .summary_tab_sel .summary_tab3:hover, .tabbed_box .summary_tab_sel a:hover, .tabbed_box .summary_tab a:hover, span.im-to-end__button, .ui_actions_menu_sublist .ui_actions_menu_item.checked:hover, .checkbox+.Post__copyrightButton:after, .wall_module .replies_side:hover, .im-replied:before{background-color: var(--main_bg)}
	.eltt{background-color: var(--bg); border-color: var(--bg)}
	.apps_feedRightAppsBlock__name{color: var(--mark)}
	.post_top_info_wall_event, .post_top_info_wall_group, .post_top_info_wall_guide, .post_top_info_wall_mention, .post_top_info_wall_podcast, .post_top_info_wall_poll_vote, .post_top_info_wall_reply, .post_top_info_wall_vkgo, .poster__slider-arrow._right, .poster__slider-arrow._left{box-shadow: var(--main_bg)}
	.Post__copyrightButton{position: inherit}
	.mention_tt_actions, .wall_tt .like_tt_bottom{background-color: var(--bgg)}
	.mention_tt_actions, .wall_tt .like_tt_bottom, .wall_module .page_friend_reply{border-color: var(--bg)}
	.flat_button.secondary_dark, .flat_button.secondary_dark:hover, .pv_cont .pv_comments_header{background-color: var(--main_bg); color: var(--text)}
	.post_top_info_wall_like{box-shadow: var(--main_bg)}
	.top_notify_count{border-color: var(--bgg)}
	.top_notify_count:hover{background-color: var(--like_mark)}
	.top_nav_btn:hover .top_notify_count{border-color: var(--bg)}
	.left_count_wrap{background-color: var(--main_bg); color: var(--white_text)}
	.wall_module .like_tt_bottom_page_friend_reply{background-color: var(--bgg)!important}
	.left_settings_inner{left: -20px}
	.ui_rmenu_item:hover, .ui_rmenu_item_sel, .ui_rmenu_item_sel:hover, .ui_rmenu_subitem:hover{background-color: var(--main_bg)}
	
	/*minidialog*/
	.fc_tab, div.fc_tab_txt {background-color: var(--bgg); border-color: var(--bgg)}
	.fc_tab_head{background-color: var(--bgg); border-color: var(--bgg)}
	#fc_contacts, .fc_content{background: var(--one_bg)}
	#fc_ctabs_cont{border: none}
	.fc_msgs, .fc_msgs_out .fc_msgs{background-color: var(--main_bg); border-color: var(--main_bg)}
	div.fc_clist_filter_wrap{background: var(--one_bg); border-top: none}
	a.fc_contact_over, .ms_items_more{background-color: var(--main_bg); border-color: var(--main_bg);}
	span.fc_contact_photo.online.mobile:after, a.fc_contact_over span.fc_contact_photo.online.mobile:after{background-color: var(--one_bg)}
	span.fc_contact_photo.online:after, a.fc_contact_over span.fc_contact_photo.online:after{border: var(--one_bg)}
	.fc_msgs_out .fc_msgs, .media_selector .ms_items_more .ms_item:hover{background-color: var(--hover)}
	.fc_tab_notify, #mail_box_editable{background-color: var(--main_bg); border: 1px solid var(--main_bg)}
	.fakeinput:focus, div[contenteditable=true]:focus, input.big_text:focus, input.dark:focus, input.search:focus, input.text:focus, textarea:focus{border-color: var(--main_bg)}
	.chat_cont_sh_bottom, .chat_cont_sh_top{background: linear-gradient(180deg, rgba(216,223,230,0), var(--main_bg) 80%)}
	.fc_msgs_unread, .chat_tab_typing_wrap, .mail_box_cont{background-color: var(--bg)}
	.fc_contact_name, .mail_box_label_peer{color: var(--text)}
	#mail_box_editable{color: var(--white_text)}
	
	/*smiles*/
	.emoji_tt_wrap{background-color: var(--bg); border: 1px solid var(--main_bg)}
	.emoji_cat_title, .ui_scroll_default_theme.ui_scroll_emoji_theme>.ui_scroll_overflow>.ui_scroll_shadow_bottom, .ui_scroll_default_theme.ui_scroll_emoji_theme>.ui_scroll_overflow>.ui_scroll_shadow_top{background: none}
	.emoji_tabs{background: var(--main_bg)}
	.emoji_tab_sel, .emoji_tab_sel:hover{background: var(--bg)}
	.emoji_bg, .emoji_tabs_l_s, .emoji_tabs_r_s{background: var(--main_bg)}
	.emoji_tabs_l_sc, .emoji_tabs_r_sc{width: 0; height: 0}
	.emoji_tabs_l_s:hover, .emoji_tabs_r_s:hover, .emoji_shop:hover, .emoji_tab:hover{background: var(--bg)}
	.emoji_cats_title_helper:after{background: none}
	
	/*dop_window*/
	.box_title_wrap.box_grey, .box_body, .owner_photo_additional, .ui_tabs.ui_tabs_box, .box_controls, .box_title_wrap, .im-mess.im-mess_light{background: var(--bg)}
	.box_title_wrap.box_grey .box_title, .owner_photo_additional, .ui_tab_sel, .ui_tabs .ui_tab_sel, .ui_tabs_box .ui_tab_sel, .box_controls .flat_button.secondary, .flat_button.secondary.button_light{color: var(--white_text)}
	.box_title_wrap.box_grey, .owner_photo_additional, .ui_tabs.ui_tabs_box{border-color: var(--main_bg)}
	.im-mess.im-mess_search:hover, .im_msg_audiomsg .audio-msg-track:not(.audio-msg-player):hover{background: var(--main_bg)}
	.box_controls{border-top: 1px solid var(--bg)}
	.box_controls .flat_button.secondary:hover, .flat_button.secondary.button_light:hover{background-color: var(--main_bg); color: var(--white_text)}
	.im-mess .im-mess--btn{color: var(--text)}
	
	/*search*/
	.ts_cont_wrap{background: var(--bg)}
	a.ts_contact.active, a.ts_search_link.active, .ts_contact.active .ts_contact_photo.online.mobile:after, .ts_contact_photo.online.mobile:after{background-color: var(--main_bg)}
	.ts_contact.active, .ts_contact_photo.online:after{border-color: var(--main_bg)}
	.ts_contact_name{color: var(--text)}
	input#ts_input{color: var(--white_text)}
	.im-page-pinned{background-color: var(--bg); border-color: var(--main_bg)}
	.im-page .im-page--header, .im-page .im-page--search-header{background: var(--bg)}
	.button_gray button, .flat_button.secondary{background-color: var(--main_bg); color: var(--white_text)}
	.button_gray button.hover, .button_gray button:hover, .flat_button.secondary.hover, .flat_button.secondary:hover{background-color: var(--main_bg)}
	.highlight{background: var(--sep)!important}
	.ts_search_sep{border-color: var(--sep)}
	// .search_focused .highlight{background-color: var(--white_text); color: var(--main_bg)}
	
	/*gs*/
	.im-audio-message-input{border-color: var(--main_bg); background: var(--bg)}
	.im-audio-message-input .im-audio-message-track{background-color: var(--main_bg)}
	
	/*calendar*/
	.cal_table .month, .cal_table .month_arr{background-color: var(--bg)}
	.cal_table .daysofweek, .bd_day_head, .bd_day_cell, .bd_day_cell.left, .bd_day_head, .bd_arrow{background-color: var(--bg)}
	.cal_table .next_month_day, .cal_table .prev_month_day, .cal_table .day{background-color: var(--main_bg); color: var(--white_text)}
	.cal_clear{background: var(--bg); border-color: var(--bg)}
	.im_cal_clear_lnk{color: var(--text)}
	.cal_table .day.sel, .cal_table .day.sel:hover{background-color: var(--text)}
	.cal_table .day:hover:not(.inactive_day), .bd_day_cell.holiday, .bd_day_cell.holiday.today, .bd_day_cell.today{background-color: var(--bg)}
	.cal_table>tbody, .cal_table>thead{border: none; background-color: none}
	.bd_header_info{color: var(--white_text)}
	.bd_day_cell, .bd_day_cell.left, .bd_day_head, .bd_day_cell.holiday.today .bd_day_events, .bd_day_cell.today .bd_day_events{border-color: var(--main_bg)}
	
	/*info_group*/
	.PopupHeader{background: var(--bgg)}
	.ChatSettings__content, .ChatSettingsInfo, .List, .ChatSettingsMembersWidget, .Button--mobile, input.ChatSettingsMembersWidget__search{background: var(--bg)}
	.ChatSettingsInfo{box-shadow: 0 1px 0 var(--bg)}
	.List--border, .ChatSettingsMembersWidget, .Button--mobile{box-shadow: 0 1px 0 var(--bg), 0 -1px 0 var(--bg)}
	.ChatSettingsInfo__title, .Tabs__item--active>*, input.ChatSettingsMembersWidget__search{color: var(--white_text)}
	.Tabs, .ChatSettingsMembersWidget--search .ChatSettingsMembersWidget__header{border-color: var(--bg)}
	.ChatSettingsMembersWidget__add, .Link{color: var(--text)}
	.Button--link.ChatSettings__criticalAction{color: var(--like_mark)}
	.Button--mobile:hover, .ListItem--active, .ListItem--can-be-hovered.ListItem--selectable:hover, .EditableLabel:hover .EditableLabel__text{background: var(--main_bg)}
	
	/*вложения*/
	.wk_history_tabs, div#wk_history_wall{background: var(--bg)}
	.photos_container .photos_row{background-color: var(--bg); border-color: var(--bg)}
	div#wk_history_more_progress, div#wk_history_more_link{border-color: var(--main_bg)}
	div#wk_history_more_link, .audio_row .audio_row__performers a, .page_doc_row .page_doc_title, .links-list__title{color: var(--text)}
	#wk_box{background: var(--bg)}
	.audio_row:hover:not(.audio_row__current) .audio_row_content, .links-list__item:hover{background-color: var(--main_bg)}
	
	/*setting_menu*/
	.tabbed_box .summary_tab_sel .summary_tab2 {background-color: var(--main_bg)}
	.tabbed_box .summary_tab_sel .summary_tab3 {color: var(--white_text)}
	.tabbed_box .summary_tabs, .olist_botsh .box_controls{border-color: var(--bg)}
	
	/*stickers*/
	.sticker_hints_tt{background-color: var(--bg); border-color: var(--main_bg)}
	.emoji_sticker_item.over, .emoji_sticker_item:hover{background: var(--main_bg)}
	.sticker_hints_arrow{background-color: var(--bg); border-color: var(--bg)}
	.sticker_hints_arrow:hover{background: var(--bgg)}
	img[src*="/sticker/"]:not(.im_stickers_my_img), .svg_sticker_animation{filter: drop-shadow(1.5px 0 0 #eee) drop-shadow(-1.5px 0 0 #eee) drop-shadow(0 1.5px 0 #eee) drop-shadow(0 -1.5px 0 #eee)!important; -webkit-filter: drop-shadow(1px 0 0 #eee) drop-shadow(-1px 0 0 #eee) drop-shadow(0 1px 0 #eee) drop-shadow(0 -1px 0 #eee)!important; padding:1.5px}
	
	/*photos*/
	.photos_choose_upload_area, .web_cam_photo{background: var(--bg); color: var(--white_text)}
	.photo_upload_separator, .StickersPanel__content{background-color: var(--main_bg)}
	.photos_choose_upload_area:hover, .web_cam_photo:hover, .photos_container_albums .photos_album_thumb{background: var(--main_bg)}
	.photos_choose_bottom{border-color: var(--bg); background-color: var(--bg)}
	.choose_search_cont input{background: url(/images/search_icon.png) no-repeat}
	.photos_choose_row{background: var(--main_bg)}
	.wall_module .reply_box, .wall_module .reply_fakebox_wrap{border-color: var(--main_bg)}
	.EditorTabs__header, .PhotoEditor__actions, .StatusPanel__background--active:after, .EditorTabs__tab{background-color: var(--bg)}
	.TextPanel, .DrawPanel{color: var(--white_text); background-color: var(--bg)}
	
	/*video*/
	.video_choose_upload_area, .video_add_external{background-color: var(--bg); color: var(--white_text)}
	.video_choose_upload_area:hover, .video_add_external:hover, .video_choose_upload_separator, .video_item .video_item_thumb_wrap, .ui_search_sugg_list .ui_search_suggestion_selected{background-color: var(--main_bg)}
	.ui_search_sugg_list, .ui_search, .ui_search_new.ui_search_field_empty .ui_search_button_search, .video_choosebox_bottom{background-color: var(--bg)}
	.ui_search_sugg_list, .ui_search_new .ui_search_input_inner, .ui_search_new .ui_search_button_search, .video_choosebox_bottom{border-color: var(--main_bg)}
	.ui_search_sugg_list{background-color: var(--bg)}
	
	/*document*/
	.docs_choose_upload_area{background-color: var(--bg); color: var(--white_text)}
	.docs_choose_rows .docs_item:hover, .docs_choose_upload_area:hover{background-color: var(--main_bg)}
	.docs_item, .docs_choose_rows .docs_item, .ui_search.ui_search_fixed, .bookmark_rows_mini .bookmarks_row:after{border-color: var(--main_bg)}
	
	/*surprise*/
	.gifts_box_header{background-color: var(--bg)}
	a b, b a{color: var(--text)}
	.gifts_section_row, div.wdd.wdd_focused, .wdd_list{border-color: var(--main_bg)}
	.box_title .back:hover{background-color: var(--main_bg)}
	.gift_free, .gift_price{background-color: var(--white_text); color: var(--bgg)}
	img.gift_img{border-radius: 10%}
	.GiftsStickerPackPreviewTooltip__button{background-color: var(--bgg); border-color: var(--bg); color: var(--white_text)}
	.im_stickers_buy_header, div.wdd{background-color: var(--bg); border-color: var(--main_bg)}
	.im_stickers_close:after{background: url(/images/icons/cross.png) no-repeat}
	.im_stickerpack_name, .subheader, h4.subheader, .wddi_over .wddi_sub, .post_author span.author, .wall_module .copy_anon_author{color: var(--white_text)}
	.wddi, .wddi_over, input.wdd_text.fl_l{background: var(--bg)}
	.wddi_text{color: var(--text)}
	.flat_button.ui_load_more_btn{border-color: var(--main_bg)}
	.gift_loader img{border-radius: 10%}
	
	/*Your balance*/
	#payments_box, .payments_getvotes_amounts .radiobtn b, .payments_getvotes_method_opt, .PromoCodesPage__infoText, .Input{color: var(--white_text)}
	.payments_getvotes_method_title, h2.payments_getvotes_title, .payments_offer_row_title, .payments_offers_view_title, .PromoCodesPage__title{color: var(--text)}
	.payments_getvotes_method_opt.payments_getvotes_active_row, .payments_getvotes_method_opt:hover, #payments_box .payments_about_votes, .payments_about_votes, .Input{background-color: var(--main_bg)}
	#payments_box .payments_about_votes, .payments_about_votes, h2.payments_getvotes_title, .box_error, .box_msg, .box_msg_gray, .error, .info_msg, .msg, .ok_msg, .Input{border-color: var(--main_bg)}
	.box_msg, .box_msg_gray, .msg{background-color: var(--bg)}
	.payments_getvotes_ps_row.payments_getvotes_active_row, .payments_getvotes_ps_row:hover{background-color: var(--main_bg)}
	.payments_offer_row, .payments_offer_row .payments_offer_hover, .payments_offer_row:hover{border-color: var(--main_bg)}
	.payments_offer_row .payments_offer_hover, .payments_offer_row:hover{background-color: var(--main_bg)}
	
	/*Money*/
	.payments_money_transfer_amount_wrap, .payments_money_transfer_comment{background-color: var(--main_bg); border-color: var(--bg)}
	input#transfer_amount{background-color: var(--main_bg); color: var(--white_text)}
	#payments_box.payments_money_transfer_box .payments_money_transfer_label{color: var(--text)}
	.selector_container table.selector_table, .result_list {border-color: var(--main_bg)}
	#payments_box.payments_money_transfer_box .payments_money_transfer_link_copy_input, .selector_container td.selector input.focused, .selector_container td.selector input.selected, .result_list ul li{color: var(--white_text); -webkit-text-fill-color: var(--white_text)}
	.selector_container, .result_list ul{background-color: var(--main_bg)}
	.payments_transfer_dd_link{color: var(--text)}
	.result_list ul li.active{background: var(--bg); color: var(--white_text)}
	
	/*qr-code возможно не нужно его красить*/
	rect#rect-0, path#empty-0, path#b-0, path#r-0, path#l-0, path#t-0, path#lt-0, path#lb-0, path#rb-0, path#rt-0, path#n_lt-0, path#n_lb-0, path#n_rt-0, path#n_rb-0, path#point-0{fill: var(--white_text)}
	
	/*Уведомления*/
	.feedback_row, .feedback_sticky_row, .top_notify_cont .top_notify_header, #top_notify_wrap, .top_notify_show_all, .flist_item_wrap, .flist_item_wrap:hover, .page_block #all_shown, .feed_row~.feed_row .feedback_row_clickable:not(.feedback_row_touched):hover, .bd_row{border-color: var(--main_bg)}
	.feedback_row_wrap.unread:not(.feedback_row_touched), .top_notify_cont .top_notify_header, #top_notify_wrap, .top_notify_show_all{background-color: var(--bg)}
	.top_notify_cont .feedback_header, .feedback_header b, .top_notify_cont .top_notify_header, .top_notify_header, .feedback_header, .wall_reply_text{color: var(--white_text)}
	.feedback_header .author, .feedback_header .group_link, .feedback_header .mem_link{color: var(--text)}
	.top_notify_show_all:hover, .notify_sources_tt_content .content:not(:hover) .line_cell.selected, .notify_sources_tt_content .line_cell:hover, .top_notify_cont .feedback_row:not(.dld).hover, .top_notify_cont .feedback_row:not(.dld):hover, .feedback_row_clickable:not(.feedback_row_touched):hover, .flist_item_wrap:hover{background-color: var(--main_bg)}
	.ui_scroll_default_theme>.ui_scroll_bar_container>.ui_scroll_bar_outer>.ui_scroll_bar_inner{background: var(--white_text)}
	
	/*Статья*/
	.article_ed_layer, .article_ed_layer .article_ed_layer__header {background-color: var(--bg)}
	.article_ed_layer .article_ed_layer__header .article_ed_layer__publish{color: var(--text)}
	.article_ed_layer .article_ed_layer__list_item .article_ed_layer__list_item_title{color: var(--white_text)}
	.article_ed_layer .article_ed_layer__publish_settings .article_ed_layer__publish_settings_header{border-color: var(--main_bg)}
	.article_ed_layer .article_ed_layer__list_item:not(.article_ed_layer__list_item--selected):hover, .article_ed_layer .article_ed_layer__list_item.article_ed_layer__list_item--selected, .page_actions_item:hover:not(.grey_hoverable), .top_profile_mrow:hover, .ui_tabs .ui_tab_group_item:hover{background-color: var(--hover)}
	
	/*Your profile*/
	.page_name, h1.page_name, .profile_warning_row, .page_actions_cont.narrow .page_actions_header_inner, .box_grey .box_title .divider:before, .box_grey .box_title .tab_link, .box_grey .box_title .toggle, .box_grey .box_title .toggle a, .wall_module .ui_tabs .ui_tab_group_sel, .ui_tabs .ui_tab_group_item{color: var(--white_text)}
	.current_audio, .page_counter .count, .wk_wall_archive__month_menu, .wk_wall_archive__tabs_menu, .wall_copy_more, .wall_post_attaches_more, .wall_post_more, .wall_reply_more, .page_actions_item, .page_counter:hover .label{color: var(--text)}
	.wide_column .page_top, .counts_module, .module, .wk_wall_archive__tabs .ui_tabs, .profile_info_block, .page_status_editor .editor, .page_actions_wrap, .page_actions_inner, .preq_tt, .page_actions_separator, .wall_module .copy_quote, .wall_module .reply~.reply .dld, .wall_module .reply~.reply .reply_wrap, .gifts_box_rows .post, .ui_tab_group_items{border-color: var(--main_bg)}
	.my_current_info:hover, .no_current_info:hover, .profile_more_info_link:hover{background-color: var(--main_bg)}
	.wk_wall_archive__tabs, .profile_info_edit, .profile_info_header, .page_status_editor .editor, .page_actions_wrap, .page_actions_header, .preq_wrap, .pv_white_bg, #groups_menu_items .groups_edit_menu_items .groups_edit_menu_item .groups_edit_menu_item_line, .ui_tab_group_items{background-color: var(--bg)}
	.button_blue button, .button_gray button, .button_light_gray button, .flat_button, .button_blue button, .button_gray button, .button_light_gray button, .flat_button{background-color: var(--btn)}
	.profile_msg_split .profile_btn_cut_right, .profile_msg_split .profile_btn_cut_left{border-color: var(--bg)}
	
	/*Your group*/
	.ui_tab_default .ui_tab_plain, .gtop_complex_message .gtop_content .gtop_header, .page_market_item_title, .gtop_complex_message .gtop_content .gtop_message, .public_help_block, input#group_edit_addr, #groups_menu_promo .apps_group_catalog_promo_header, .groups_edit_chats .groups_chats_promo .apps_group_catalog_promo_header, #groups_apps_catalog_promo .apps_group_catalog_promo_header, .apps_group_catalog_header .apps_group_catalog_header_desc .apps_group_catalog_header_desc_text, .ui_tooltipMenu__link, ul.listing li span, .groups_cover_box .groups_edit_cover_header .groups_edit_cover_header_title, .groups_cover_box .groups_edit_cover_wrap .groups_edit_cover_wrap_desc, .stats_cont_browse_tile, #stats_cont h4, .stats_head, #group_section_menu .module_body .ui_gallery .ui_gallery_item .groups_menu_item .groups_menu_item_title, .media_voting_question, .media_voting_option_text, .media_voting_option_count, .media_voting_option_percent, .audio_pl_snippet2 .audio_shuffle_all_button, .audio_pl_snippet2 .audio_pl_snippet__info_author .group_link, .app_widget_table_td, .app_widget_table_th, .app_widget_text_content, .market_album_name_link, .microdata_price{color: var(--white_text)}
	.group_friends_image, .group_u_photo.online:after{border-color: var(--bg)}
	.bt_header, .bp_post, #gtop_first_post_to_wall, .prefix_input_border, .prefix_input:focus+.prefix_input_border, .group_edit_row_sep, .groups_api_divider, .gedit_block_footer, .group_l_row:last-child, .group_l_row, .apps_group_catalog_header, .apps_group_catalog_rows .apps_catalog_row, .community_apps_catalog_type_tabs.ui_tabs_header, .groups_edit_event_log_page .groups_edit_event_log_controls, .groups_edit_event_log_page .groups_edit_event_log_items_wrap, .groups_edit_event_log_page .groups_edit_event_log_items_wrap .groups_edit_event_log_item_wrap, .groups_cover_box .groups_edit_cover_header, .stats_browse_filter, #stats_cont h4, .stats_head, .piechart_table tr td, .stats_community_messages_info, .post_publish, .stories_groups_block_stories_wrap .stories_groups_block_stories_row, .post_friend_liked, .module_header.header_separated{border-color: var(--main_bg)}
	.blst_title, .blst_mem, .group_info_rows_redesign .group_info_row.onboarding_placeholder .line_value .line_div_value.empty, .page_actions_dd_label, .page_actions_header_inner, .group_edit_labeled .idd_wrap .idd_selected_value, a.group_l_title, a.group_u_title, .wk_header, .group_settings_advice a, .groups_edit_event_log_page .groups_edit_event_log_controls, .groups_edit_event_log_page .groups_edit_event_log_filter .ui_tooltipMenu__current, .ui_ownblock_label, .page_photo.page_action_menu_groups .page_actions_item.group_send_msg_status_block .group_send_msg_status_block_title, .stories_groups_block_stories_empty .page_module_upload, .summary_tab3, .wk_voting_menu, .thumbed_link__title{color: var(--text)}
	.blst_last:hover, .group_info_rows_redesign .group_info_row.onboarding_placeholder .line_value.line_edit, .group_info_rows_redesign .group_info_row.onboarding_placeholder .line_value:hover, .group_api_url_desc, .ui_tooltipMenu__link:hover, .groups_edit_event_log_page .groups_edit_event_log_items_wrap .groups_edit_event_log_item_wrap:hover>.groups_edit_event_log_item_main, .groups_edit_event_log_page .groups_edit_event_log_items_wrap .groups_edit_event_log_item_wrap_focused, .ui_ownblock:hover, .groups_cover_box .groups_edit_cover_wrap .groups_edit_cover_wrap_live .groups_edit_cover_wrap_live_previews .groups_edit_cover_wrap_live_upload .groups_edit_cover_wrap_live_upload_placeholder_disabled, .groups_cover_box .groups_edit_cover_wrap .groups_edit_cover_wrap_live .groups_edit_cover_wrap_live_previews .groups_edit_cover_wrap_live_upload .groups_edit_cover_wrap_live_upload_placeholder_enabled:hover, .stats_cont_browse_tile, .stats_cont_browse_tile .stats_cont_browse_tile_desc, .piechart_col_header th, .media_voting, .summary_tab2:hover, .audio_pl_snippet2 .audio_shuffle_all_button:hover{background-color: var(--main_bg)}
	.prefix_input_wrap, .gedit_block_footer, .group_l_row, .community_apps_catalog_type_tabs.ui_tabs_header, .groups_edit_event_log_page .groups_edit_event_log_controls, .groups_edit_event_log_page .groups_edit_event_log_items_wrap .groups_edit_event_log_item_counter, .groups_cover_box .groups_edit_cover_header, #stats_cont.stats_cont_browse{background-color: var(--bg)}
	.media_voting_option{background-color: var(--btn)}
	.media_voting_can_vote.media_voting_clickable_option .media_voting_option_wrap:not(.media_voting_option_selected):hover .media_voting_option, .media_voting_option_leader .media_voting_option_bar, .media_voting_option_bar, .wk_voting_option_bar_inner{background-color: var(--mark)}
	.media_voting{box-shadow: var(--main_bg)}
	.group_info_rows_redesign .group_info_row.time .address_time_status_cur_time{color: var(--good_mark)}
	
	/*Friends&groups&videos*/
	.ui_tabs_header, .page_block_header {background-color: var(--bg)}
	.friends_user_row, .page_block_header, .ui_search.ui_search_fixed, .friends_list_bl, .disabled.selector_container, .search_sep, .search_row, .disabled.selector_container table.selector_table, .ui_search_fltr, .group_list_row, .idd_popup, .mv_actions_block, .mv_info_narrow_column, .mv_comments_summary, #mv_pl_tt .mv_tt_add_playlist, #mv_pl_tt .mv_tt_private_only+.mv_tt_playlists, .mv_comments_restricted_msg, .privacy_dropdown .header, .privacy_dropdown{border-color: var(--main_bg)}
	.page_block_header, .page_block_header, .friends_phonebook .friends_field, .ui_search_fltr_label, h2, .idd_popup .idd_header, #video_playlists_edit_box .pl_size, .groups_create_type .groups_create_tile_description, .groups_create_box .groups_create_box_title, .groups_create_box .groups_create_box_about, .groups_create_box .groups_create_box_field_date .groups_create_box_field_date_at_time, .datepicker_text, .mv_title, .mv_recom_block_title, .mv_comments_summary, #mv_pl_tt .mv_tt_playlist, .privacy_dropdown .header, .privacy_dropdown .item_sel, .privacy_dropdown .item_sel_plus, .privacy_dropdown .l_item:hover, .privacy_dropdown .l_item_sel:hover, .video_add_live_tab .video_upload_live_launch_steps_wrap .listing, .video_edit_live_settings_wrap .video_upload_live_launch_steps_wrap .listing, .video_add_live_tab .video_add_live_trans__warning, .video_edit_live_settings_wrap .video_add_live_trans__warning{color: var(--white_text)}
	.group1, .group2, .group3, .group4, .group5, .group6, .group7, .group8, .group9, .group10{color: var(--bg)}
	.friends_user_row .online.mobile:after, .search_row .online.mobile:after, .search_item_img, .friends_search_filters, .friends_search_import, .ui_search_fltr, .friends_photo_img, .friends_photo_img:before, .friends_photo_img:after, .idd_popup .idd_header_wrap, .idd_popup .idd_items_content, #add_place_data, .mv_info, #mv_pl_tt .mv_tt_add_playlist, .privacy_dropdown .header, .privacy_dropdown .body, .privacy_dropdown .l_header .l_header_label, .privacy_dropdown .l_item, .privacy_dropdown .l_item_sel, .privacy_dropdown .l_header, .video_upload__thumb_chooser_wrap .video_tc_item{background-color: var(--bg)}
	.friends_user_row .online:after, .search_row .online:after, .result_list ul li.sectioned.section, .datepicker_control{border-color: var(--bg)}
	#payments_box.payments_money_transfer_box .payments_money_transfer_link_copy_input, .selector_container td.selector input.focused, .selector_container td.selector input.selected, .result_list ul li{-webkit-text-fill-color: var(--white_text)}
	.disabled.selector_container, .friends_import_row:hover, .idd_popup .idd_item.idd_hl, .idd_popup .idd_item.idd_hover, .idd_popup .idd_item.idd_hover_sublist_parent, .ui_search_new .ui_search_button_search, .ui_search_new .ui_search_button_search:hover, .groups_create_type .groups_create_tile:hover, .datepicker_text, .mv_desc .can_edit:hover, #mv_pl_tt .mv_tt_add_playlist:hover, #mv_comments_header, .privacy_dropdown .item_sel, .privacy_dropdown .item_sel_plus, .privacy_dropdown .l_item:hover, .privacy_dropdown .l_item_sel:hover, .video_add_live_tab .video_tc_upload_btn, .video_edit_live_settings_wrap .video_tc_upload_btn, .video_upload_separator_line, .ui_gridsorter_cont .ui_gridsorter_moveable{background-color: var(--main_bg)}
	.idd_wrap .idd_selected_value, .idd_popup .idd_item, .groups_create_type .groups_create_title, .groups_create_type .groups_create_tile_title, #mv_comments_header, .privacy_dropdown .item, .privacy_dropdown .item_sel, .privacy_dropdown .item_sel_plus, .privacy_dropdown .l_header .l_header_label, .privacy_dropdown .l_item, .privacy_dropdown .l_item_sel, .video_add_live_tab .video_tc_upload_btn, .video_edit_live_settings_wrap .video_tc_upload_btn{color: var(--text)}
	// a.page_post_thumb_wrap.image_cover.page_post_thumb_last_column.page_post_thumb_last_row{border-radius: 10%}
	.video_upload__thumb_chooser_wrap .video_tc_item:hover{background-color: var(--mark)}
	.video_add_live_tab .video_add_live_trans__warning, .video_edit_live_settings_wrap .video_add_live_trans__warning{border-color: var(--mark)}
	
	/*Music*/
	.audio_page_player2 .audio_page_player_title_song, .audio_page_layout .audio_blocks .recoms_special_block_title, .audio_page_layout .audio_section .recoms_special_block_title, .audio_pl_item2 .audio_pl__subtitle>a, .audio_row .audio_row__position, .audio_page__shuffle_all .audio_page__shuffle_all_button, .audio_subscribe_promo__title, .audio_subscribe_promo__text, .audio_pl_snippet2 .audio_pl_snippet__artist_link{color: var(--white_text)}
	.audio_page_layout .audio_item__title, .audio_page_layout .audio_item__title>a, ._audio_section__search .audio_row.audio_has_lyrics .audio_row__title_inner, .ap_layer__content .audio_row.audio_has_lyrics .audio_row__title_inner, .audio_page__audio_rows .audio_row.audio_has_lyrics .audio_row__title_inner, .audio_section_global_search__audios_block .audio_row.audio_has_lyrics .audio_row__title_inner, .audio_pl_snippet2 .audio_pl_snippet__info_title, .audio_row__more_actions .audio_row__more_action{color: var(--text)}
	.page_block._audio_page_content_block:before, .audio_page_layout .audio_block:before{box-shadow: var(--bg)}
	.audio_page_layout .audio_search_wrapper, .audio_page_player2.audio_page_player_fixed, .audio_row.audio_row__current .audio_row_content, input#audio_friends_search, .audio_page_layout .audio_friends_list, .audio_pl_edit_box .ape_header, .audio_pl_edit_box .ape_list_header, .audio_pl_edit_box .ape_cover,.audio_layer_container .audio_page_player_wrap, .audio_pl_snippet2, .ap_layer_wrap .ap_layer__content, .CatalogBlock--divided, .CatalogSection{background-color: var(--bg)}
	.audio_page__shuffle_all .audio_page__shuffle_all_button:hover, .audio_pl_edit_box .ape_add_audios_btn:hover, .audio_pl_edit_box .ape_add_pl_audios_btn:hover, .audio_layer_container .audio_friend:hover, .audio_row__more_actions .audio_row__more_action:hover{background-color: var(--main_bg)}
	.audio_page_layout .has_friends_block .audio_page__rows_wrap, .audio_feed_post, .audio_pl_edit_box .ape_header, .audio_pl_edit_box .ape_add_audios_btn, .audio_pl_edit_box .ape_add_pl_audios_btn, .audio_pl_edit_box .ape_cover, .audio_layer_container .audio_page__footer, .audio_pl_snippet2 .audio_pl_snippet__header, div[contenteditable=true], .wdd_list, .wddi, .wddi_over, .like_share_ava.wdd_imgs .wdd_img_full, .like_share_ava.wdd_imgs .wdd_img_half, .like_share_ava.wdd_imgs .wdd_img_tiny, .audio_subscribe_promo{border-color: var(--main_bg)}
	.audio_layer_container .audio_page_player_wrap{border-color: var(--main_bg)!important}
	.audio_restriction_box__title{color: var(--white_text)} .audio_page_separator{background-color: var(--sep)!important}
	.CatalogBlock--divided:before, .CatalogSection:before{box-shadow: var(--bg)}
	.ui_search_new.ui_search_dark .ui_search_button_search{background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2224%22%20viewBox%3D%221284%20207%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m1298.5%20222.9c-1%20.7-2.2%201.1-3.5%201.1-3.3%200-6-2.7-6-6s2.7-6%206-6%206%202.7%206%206c0%201.3-.4%202.5-1.1%203.5l2.8%202.7c.3.4.4%201.1%200%201.5-.4.3-1.1.3-1.5%200zm-3.5-.9c2.2%200%204-1.8%204-4s-1.8-4-4-4-4%201.8-4%204%201.8%204%204%204z%22%20fill%3D%22%239CAAB9%22%2F%3E%3C%2Fsvg%3E") var(--main_bg) no-repeat 50%}


	/*Setting*/
	.pedit_separator, .settings_line, .settings_block_footer, .settings_privacy_row, .settings_bl_row, .settings_apps .apps_settings_row_wrap, .settings_block_msg, .settings_table_row, .settings_history_table tr td, .settings_blb_row, .settings_more, .settings_blb_row:last-child, .settings_more:hover, .ui_tabs, .help_table_question, .help_table_questions, .tickets_suggests_wrap, .tickets_suggest{border-color: var(--main_bg)}
	.settings_block_footer, .settings_blb_row, .faq_tabs.ui_tabs, .tickets_suggests_wrap{background-color: var(--bg)}
	.settings_deact_header, .box_msg, .box_msg_gray, .settings_votes_income .settings_history_amount, .settings_transfer_empty_box_header, .apps_access_item_info b, .help_tile__title_a, .help_table_questions__title, .wk_sub_sub_header{color: var(--white_text)}
	.settings_separated_row+.settings_separated_row:after, .settings_more:hover, .ui_actions_menu_item.feedback_new_source:hover, .help_table_question_visible, .tickets_suggest:hover{background-color: var(--main_bg)}
	.settings_apps .app_settings_name a, a.settings_blb_title, .help_tile_faqs__row_a, .help_table_question_visible>.help_table_question__q{color: var(--text)}
	.faq_search_form{box-shadow: var(--bg)}
	
	/*Sticker shop*/
	.im_stickers_bl_wrap, .im_stickers_store_wrap .ui_tabs, .im_stickers_my_tip, .layers_shown .chat_onl_inner{background-color: var(--bg)}
	.im_sticker_bl{background-color: var(--main_bg)}
	.im_sticker_bl_name, .im_stickers_my_tip, .im_stickers_my_name{color: var(--white_text)}
	.box_body .im_stickers_store_wrap .ui_tabs, .im_stickers_my_row~.im_stickers_my_row, .im_stickers_store_wrap .ui_tabs_fixed .ui_tabs{border-color: var(--main_bg)}
	.ui_tab_plain{color: var(--text)}
	.settings_line.unfolded{background-color: var(--bg); border-top: 1px solid var(--sep)}
	.verification_box, .verification_title, .verification_set_item, .verification_set_item_title, h1, .tutorial_step_hint, .radiobtn{color: var(--white_text)!important}
	
	/*Lang*/
	.language_box_row.language_box_row_selected .language_box_row_label{color: var(--white_text)}
	.language_box_row:hover{background-color: var(--main_bg)}
	.language_box_row .language_box_row_label, .language_selected {color: var(--text)}
	
	/*Вкладка ЕЩЁ*/
	body.is_page, #page_wrap, .PageNavigation_wrap{background-color: var(--bgg)}
	.landing_transparencyHeader, .landing_transparencyFooter{background-color: var(--one_bg)}
	.landing_safetyStats__count, .landing_safety .landing_transparencySection__next, .landing_transparencySection__title, .landing_safety .landing_transparencySection__wiki .wikiSubHeader, .landing_safety .landing_transparencySection__wiki a.wikiExtLink, .landing_safety .landing_transparencySection__wiki a.wikiExtLink:hover, .landing_safety .landing_transparencySection__wiki a.wikiVkLink, .landing_safety .landing_transparencySection__wiki a.wikiVkLink:hover, .landing_transparencyFooter a, .landing_transparencySection_tips b, a.AboutLinksItem:hover .AboutLinksItem__title, a.AboutLinksItem.AboutLinksItem--subtitle-link:hover .AboutLinksItem__title, .AboutLinksItem--press .AboutLinksItem__subtitle, .AboutLinksItem--support .AboutLinksItem__subtitle, .NavBar__link:hover, .PageNavigationBottom__lang a, .PageNavigation__navBar .ui_tab_sel, .PageNavigation__navBar .ui_tab_sel:hover, .TeamPageLink:hover .TeamPageLink__title, .JobThumb:hover .JobThumb__title, .ProductsAppItem>a:hover .ProductsAppItem__title, .SmallAppLink, .ProductsLandingItem:hover .ProductsLandingItem__title, .BlogPostThumb__linkWrapper:hover .BlogPostThumb__title, .BlogPageSideMenu__link{color: var(--text)}
	.landing_safetyStats__title, .ScrollElement__title, .AboutLinksItem__title, .AboutLinksItem__subtitle, .NavBar__link, .TeamPageLink__title, .JobsPageHeader__subtitle, .JobThumb__description, .JobThumb__title, .ProductsAppItem__title, .ProductsLandingItem__title, .ProductsLandingItem__subtitle, .BlogPageTopMenu__link--active, .BlogPostThumb__text, .BlogPostThumb__title, .BlogPageSideMenu__sectionHeader, .BlogPageSideMenu__text{color: var(--white_text)}
	.landing_transparencyFooter{box-shadow: var(--bg)}
	.landing_safety .landing_transparencySection__wiki .wikiSubHeader:before{background-color: var(--mark)}
	.PageSection--gradient:before{background: none}
	html, body{background-color: var(--bgg)}
	body.scrolled .PageNavigation_wrap, .PageFooterWrap{border-color: var(--bg)}
	.JobsPopup__description, .FormGroup__labeled>input, .FormGroup__labeled>textarea, .BlogPageSideMenu__separator{border-color: var(--main_bg)}
	.PagesDropdown .results_container .active{background-color: var(--white_text)}
	.PagesDropdown .results_container a, .PagesDropdown .results_container li{color: var(--mark)}
	
	/*Stories*/
	.EditorTabs__header, .BaseModal__content, .PhotoEditor__canvas, .stories_feedback_tt, .StickersPanel__header, .stories_feedback_title, .DropBox, .Button--secondary{background-color: var(--bg)}
	.EditorTabs__header, .PhotoEditor__actions, .StatusPanel__background--active:after{border-color: var(--main_bg)}
	.StatusPanel__arrow--right{linear-gradient(90deg, rgba(30,30,30,0) 0, rgba(30,30,30,.84) 22%, var(--bg) 37%, var(--bg))}
	.StatusPanel__arrow--left{linear-gradient(90deg, var(--bg) 0, var(--bg) 63%, rgba(30,30,30,.84) 78%, rgba(30,30,30,0))}
	.StickersPanel__tab--selected, .StickersPanel__tab--selected:hover, .StickersPanel__tab:hover, .StickersPanel__preview:hover, .stories_feedback_view:hover, .Button--secondary:not(.Button--disabled):focus, .Button--secondary:not(.Button--disabled):hover, .Button--secondary:not(.Button--disabled):active{background-color: var(--main_bg)}
	.StickersPanel__arrow--right, .StickersPanel__arrow--left{background: var(--main_bg)}
	.stories_feedback_view_name, .Button--secondary{color: var(--white_text)}
	
	/*Games*/
	.feed_blog_reminder_title a, .page_block_sub_header{color: var(--white_text)}
	.app_link, .header_side_link, .header_side_link a{color: var(--text)}
	.ui_tab_group_separator{border-color: var(--main_bg)}
	
	/*Login*/
	.login_page #footer_wrap, .index_page .index_footer_wrap, .bottom_row, .footer_wrap, .join_finish_page #footer_wrap{border-color: var(--main_bg)}
	.bottom_row{background-color: var(--bg)}
	.bottom_row{color: var(--white_text)}


	/*DONOS*/
	.save_button_donos.feedback_row:hover{background-color: var(--main_bg)}
	.top_nav_btn_icon, .s_btn, .left_icon.fl_l, #stl_text{filter: contrast(0) brightness(1.5)}
	
	/*UPDATE*/
	.pv_cont .pv_closed_commments_placeholder{background-image: url("https://i.imgur.com/IMydyAG.png")}
	.no_posts_cover{background-image: url(https://i.imgur.com/ll6LrUq.png)}
	.im-page .im-page--center-empty{background: url(https://i.imgur.com/zSxzsLb.png) 60px 0px no-repeat}
	.feedback_img:after, .im_grid>img:after, .nim-peer--photo>img:after, img[src*="/images/dquestion_i"], [style*="/images/camera_"] {background: url(https://i.imgur.com/LI22hN0.png) -6px no-repeat; background-size: 55px;}
	img[src*="/images/camera_"]{filter: invert(0.93)}
	.nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_selected:hover:before, .nim-dialog:not(.nim-dialog_deleted).nim-dialog:hover:before, .nim-dialog._im_dialog:hover:before, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_muted.nim-dialog_selected:before, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected:before{position: absolute; content: ""; left: 0px; transform: translate(-4px, 20px); border: 10px solid transparent; border-left-color: var(--white_text)}
	#side_bar ol li .left_row:hover:before {position: absolute; content: ""; transform: translate(-6px, 8px); border: 6px solid transparent; border-left-color: var( --white_text)}
	img[src*="/images/pics/spamfight.gif"]{filter: invert(0.9) grayscale(1)}
	img[src*="/images/deactivated_"]{filter: invert(0.98)}
	a#ads_ad_box2_ad_e65925ae5f0d5bbb{display:none}
	`
}

var btn_bool = false

function menu_color_style() {

	const body_bg = document.querySelector('#system_msg');

	body_bg.insertAdjacentHTML('beforeBegin',
		`<div class="menu_style">
		<div class="test_bg">
			<div class="test_bg_dialog">
				<span class="test_hyperlink">Ссылка</span> : <span class="test_text">Текст</span>
			</div>
		</div>
		<div class="conteiner_style">
			<div class="btn_deactiveted"><div class="boll"></div></div>
			<h2>Настройки цвета / <div class="new_list"><span id='unk'>Фон</span>
			<ul class="dropdown">
				<li id="n_">Фон</li>
				<li id="n_">Фон диалога</li>
				<li id="n_">Текст</li>
				<li id="n_">Ссылки</li>
			</ul>
			</div></h2>
			<br>
			<hr>
			<span>Значение</span><br>
			<input type="range" id="c1" min="0" max="255" value="0">
			<input type="range" id="c2" min="0" max="255" value="0">
			<input type="range" id="c3" min="0" max="255" value="0"><br>
			<span>HEX номер цвета (альфа)</span>
			<input type="text" id="t1"><br>
			<button class="btn_accept">Принять цвет</button> <button class="btn_remove">Сбросить</button><br>
			<button class="btn_time_bg"></button>

			<div class="updates">
				<span>Добавлено в:\n<p class="version">v1.5.0.6</p></span>
			</div>
		</div>
	</div>`); 

	if (btn_bool == true){
		document.querySelector('.btn_deactiveted').className += ' active'
		document.querySelector('.boll').className += ' active'
	}
	if (get_date()['bg_mode'] === true){
		document.querySelector('.btn_time_bg').className += ' active'
	}
	document.querySelector('.btn_time_bg').innerText = 'Режим: '+get_date()['bg_mode']	
}

function funintp(){
	var ired=document.getElementById('c1');
	var igreen=document.getElementById('c2');
	var iblue=document.getElementById('c3'); 

	var inputText = document.getElementById('t1')
    var div=document.body;
    var text = document.querySelectorAll('.conteiner_style span')[1]
    const list = document.querySelector('.conteiner_style #unk').innerText


	// Ручной ввод цвета!!
	if (list === 'Фон'){
		inputText.onchange = inputText.oninput = function() {
	    	document.documentElement.style.setProperty('--bgg', '#' + this.value);
		};
	} else if (list === 'Фон диалога'){
		inputText.onchange = inputText.oninput = function() {
	    	document.documentElement.style.setProperty('--bgg', '#' + this.value);
		};
	} else if (list === 'Ссылки') {
		inputText.onchange = inputText.oninput = function() {
	    	document.documentElement.style.setProperty('--text', '#' + this.value);
		};
	} else if (list === 'Текст') {
		inputText.onchange = inputText.oninput = function() {
	    	document.documentElement.style.setProperty('--white_text', '#' + this.value);
		};
	}


	red = ired.value;
	green = igreen.value;
	blue = iblue.value;  

	// Ползунковая смена
	var hex_print = rgbToHex(parseInt(red), parseInt(green), parseInt(blue))
	text.innerText = 'rgb('+red+','+green+','+blue+')\nhex('+hex_print+')'

    if (list === 'Фон'){
	   	document.querySelector('.menu_style .test_bg').style.backgroundColor = 'rgb('+red+','+green+','+blue+')'
	   	// document.querySelector('.menu_style .test_bg').style.backgroundColor = '#' + inputText.value;
	} else if (list === 'Фон диалога'){
		document.querySelector('.menu_style .test_bg_dialog').style.backgroundColor = 'rgb('+red+','+green+','+blue+')'
	   	// document.querySelector('.menu_style .test_bg_dialog').style.backgroundColor = '#' + inputText.value;
	} else if (list === 'Ссылки'){
		document.querySelector('.menu_style .test_hyperlink').style.color = 'rgb('+red+','+green+','+blue+')'
	   	// document.querySelector('.menu_style .test_hyperlink').style.color = '#' + inputText.value;
	} else if (list === 'Текст'){
		document.querySelector('.menu_style .test_text').style.color = 'rgb('+red+','+green+','+blue+')'
	   	// document.querySelector('.menu_style .test_text').style.color = '#' + inputText.value;
	}

	function rgbToHex(r, g, b) {
		function componentToHex(c) {
		  var hex = c.toString(16);
		  return hex.length == 1 ? "0" + hex : hex;
		}
	  	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}


}

window.addEventListener('input', function (event) {	// Настройка цвета
	if (event.target.id === 'c1' || event.target.id === 'c2' || event.target.id === 'c3' || event.target.id === 't1'){
		funintp();
	}

	document.onkeydown = function(e) {
	    if (e.altKey && e.keyCode == 86) {
	    	event.target.innerText = event.target.innerText.engForrus()
	    }
	}
});

window.addEventListener('click', function(event) {

	const btn_menu = document.querySelector('.menu_style_btn');
	const menu_style = document.querySelector('.menu_style');
    const body = document.body;
	const styles = document.querySelector('.style_theme');


	if (event.target.className === 'menu_style_btn') {
		menu_color_style();
		const conteiner = document.querySelector('.conteiner_style');
		setTimeout(() => {conteiner.className += ' trsf';})

		btn_menu.className += ' active_menu';

	}else if (event.target.className === 'menu_style_btn active_menu'){
		// event.target.className != 'conteiner_style trsf' ||
		try {
			const conteiner = document.querySelector('.conteiner_style.trsf');
			btn_menu.className = 'menu_style_btn';
			menu_style.remove();

		} catch(e) {}
	}

	if (event.target.className === 'btn_accept'){
	    select_color()
	} 
	if (event.target.className === 'btn_remove'){
		document.documentElement.style.setProperty('--one_bg', one_bg);
		document.documentElement.style.setProperty('--bg', bg);
		document.documentElement.style.setProperty('--main_bg', main_bg);
		document.documentElement.style.setProperty('--text', text);
		document.documentElement.style.setProperty('--good_mark', good_mark);
		document.documentElement.style.setProperty('--mark', mark);
		document.documentElement.style.setProperty('--like_mark', like_mark);
		document.documentElement.style.setProperty('--bgg', bgg);
		document.documentElement.style.setProperty('--white_text', white_text);
		document.documentElement.style.setProperty('--btn', btn);
	}
	if (event.target.className === 'btn_deactiveted' || event.target.className === 'boll'){ // Сброс темы
		if (event.target.lastElementChild == null){
			event.target.className += ' active'
			event.target.parentElement.className += ' active'
		} else{
			event.target.lastElementChild.className += ' active'
			event.target.className += ' active'
		}
		btn_bool = true;

		styles.remove()
	} else if (event.target.className === 'btn_deactiveted active' || event.target.className === 'boll active') {
		if (event.target.lastElementChild == null){
			event.target.className = 'boll'
			event.target.parentElement.className = 'btn_deactiveted'
		} else{
			event.target.lastElementChild.className = 'boll'
			event.target.className = 'btn_deactiveted'
		}
		btn_bool = false;
		
		main()	
	}

	if (btn_bool === true){
		document.body.style.backgroundColor = '#edeef0';
	}


	if (event.target.id === 'unk'){
		list = document.querySelector('.dropdown')
		if (list.className === 'dropdown'){
			list.className += ' un';
		} else{
			list.className = 'dropdown'
		}
	}
	if (event.target.id === 'n_'){
		list.className = 'dropdown'
		document.querySelector('#unk').innerText = event.target.innerText
	}

	if (event.target.className === 'btn_time_bg'){
		save_date(true)
		event.target.className += ' active'
		delinterval = setInterval(updtime, 60000);
		event.target.innerText = 'Режим: ' +get_date()['bg_mode']
	} else if(event.target.className === 'btn_time_bg active') {
		save_date(false)
		event.target.className = 'btn_time_bg'
		event.target.innerText = 'Режим: ' +get_date()['bg_mode']
		clearInterval(delinterval);	
	}

	if (event.target.className === 'version'){
		alert('Пока что не написано')
	}

});

function updtime(){
	const styles = document.querySelector('.style_theme');
	let time = document.lastModified.split(' ')[1].split(':')
	let hour = parseInt(time[0])
	let min = parseInt(time[1])
	if ((hour >= 21 && min >= 0) || (hour <= 8 && min >= 0)){
		if (!styles){main()}
		// console.log('темень')
	} else if(hour >= 8 && min >= 0){
		// console.log('light')
		try{
			styles.remove()
		} catch (e){}
	}
}

function select_color(){
	const hex = document.querySelectorAll('.conteiner_style span')[1].innerText.split('\nhex(')[1].split(')')[0]
    const list = document.querySelector('.conteiner_style #unk').innerText
    if (list === 'Фон'){
	    document.documentElement.style.setProperty('--bgg', hex);
	} else if (list === 'Фон диалога'){
	    document.documentElement.style.setProperty('--bg', hex);
	} else if (list === 'Ссылки'){
		document.documentElement.style.setProperty('--text', hex);
	} else if (list === 'Текст'){
		document.documentElement.style.setProperty('--white_text', hex);
	}

}

String.prototype.engForrus = function() {
	let rus = ['й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю', 'Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Я','Ч','С','М','И','Т','Ь','Б','Ю','ё','Ё']
	let eng = ['q','w','e','r','t','y','u','i','o','p','[',']','a','s','d','f','g','h','j','k','l',';',"'",'z','x','c','v','b','n','m',',','.', 'Q','W','E','R','T','Y','U','I','O','P','[',']','A','S','D','F','G','H','J','K','L',':','"','Z','X','C','V','B','N','M','<','>','`','~']
	let n_russ = ''	
	let ff = ''
	for (var i = 0; i <= (this.length - 1); i++) {
		n_russ = eng.indexOf(this[i], 0)
		switch(n_russ) {
			case n_russ : if (rus[n_russ] == undefined) {
					ff += ' '}
				else{
					ff += rus[n_russ]}
			break;
		}
	}
	return ff
}

function get_date() {
	let save_name = 'Цвет фона'	
	return JSON.parse (localStorage.getItem (save_name));	
}

function save_date(mode=false) {
	try {
		let your_id = document.scripts[document.scripts.length - 1].innerHTML.split('handlePageParams({"id":')[1].split(',"leftblocks"')[0]
		let save_name = 'Цвет фона'
		var save_object = {
			user_id : your_id, 
			bg_mode : mode, 
			bg : null
		}

		localStorage.setItem(save_name, JSON.stringify(save_object));	
	} catch(e){}
}

one_bg = '#0d0e0d'
bg = '#191b19'
main_bg = '#292c29'
text = '#6392bd'
good_mark ='#4aba4a'
mark = '#6ba2e7'
like_mark = '#f73c4a'

bgg = '#111111'
white_text = '#dee3e7'
btn = '#4779bd'
sep = '#414141'
hover = '#3c3e3c'
