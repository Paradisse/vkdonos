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
	#side_bar ol li .left_row:hover, .dev_top_link.sel, .dev_top_link.sel:hover, .dev_home_link:hover, .dev_top_link:hover, .top_nav_link.active, .top_nav_link:hover, .top_nav_btn.active, .top_nav_btn:hover, .top_audio_player.active, .top_audio_player:hover, .dev_top_input, .im-page .im-page--center-empty{background: none;}\
	#side_bar ol li .left_row, a.im-page--dialogs-filter, a._im_start_new, .im-mess-stack .im-mess-stack--content .im-mess-stack--pname>a, a.im-page--title-main-inner._im_page_peer_name{color: var(--text)}\
	.page_block, .im-page .im-page--dialogs-footer.ui_grey_block, .im-page--header.ui_search._im_dialogs_search, .ui_search.ui_search_field_empty._im_dialogs_search_input.im-page--dialogs-search.ui_search_custom._wrap.ui_search_old, .ui_search_input_block, .im-page--mess-search._im_mess_search, .nim-dialog .nim-dialog--content, .im-page--chat-header-in, .im-page--title-wrapper, .im-page--toolsw, .im-chat-input.clear_fix._im_chat_input_parent, .im-mess.im-mess_selected:last-child:before, .im-mess.im-mess_unread:last-child:before, .im-page .im-page--history-new-bar, .thumbed_link__thumb, .thumbed_link__label, .thumbed_link--chat-invitation, .im-page .im-page--history-new-bar:after, .im-page .im-page--history-new-bar:before, .im-page .im-page--history-new-bar>span{background-color: var(--bg); box-shadow: none; border: none;}\
	.im-mess--text.wall_module._im_log_body, .thumbed_link--chat-invitation .thumbed_link__title, .im-page .im-search-results-head, a.im-popular--name, span._im_dialog_link, span.im-page--selected-messages-count{color: var(--white_text)}\
	.nim-dialog.nim-dialog_unread-out.nim-dialog_muted:not(.nim-dialog_failed) .nim-dialog--unread, .nim-dialog.nim-dialog_unread-out:not(.nim-dialog_failed) .nim-dialog--unread, .nim-dialog.nim-dialog_unread.nim-dialog_unread-out:not(.nim-dialog_failed) .nim-dialog--unread{background-color: var(--mark)}\
	.nim-dialog .nim-dialog--preview-attach{color: var(--text)}\
	\
	.nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_classic.nim-dialog_unread, .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_hovered, .nim-dialog:not(.nim-dialog_deleted).nim-dialog:hover, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered+.nim-dialog, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected+.nim-dialog, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic+.nim-dialog, .nim-dialog:not(.nim-dialog_deleted):hover+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted):hover+.nim-dialog, .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_selected.nim-dialog_classic.nim-dialog_unread, .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_selected.nim-dialog_hovered, .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_selected:hover, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered+.nim-dialog.nim-dialog_selected, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered.nim-dialog_selected+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected+.nim-dialog, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected:hover+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic+.nim-dialog.nim-dialog_selected, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic.nim-dialog_selected+.im-search-results-head, .nim-dialog:not(.nim-dialog_deleted):hover+.nim-dialog.nim-dialog_selected{border-top: solid 1px var(--bg);}\
	.nim-dialog._im_dialog:hover, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_muted.nim-dialog_selected, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected{background-color: var(--bg); border:none;}\
	.nim-dialog .nim-dialog--photo, .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_muted.nim-dialog_selected .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_muted.nim-dialog_selected .nim-dialog--photo, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected .nim-dialog--photo, .nim-peer{background-color: var(--bg); border-color: var(--bg);}\
	li.im-mess._im_mess.im-mess_unread._im_mess_unread.im-mess_out.im-mess_editable, .im-mess.im-mess_selected:not(.im-mess_is_editing), .im-mess.im-mess_selected:not(.im-mess_is_editing):hover, input.text.ts_input, input.text.ts_input:focus{background: var(--main_bg); border-color:0;}\
	\
	.im-chat-input .im-chat-input--txt-wrap, .fakeinput, div[contenteditable=true], input.big_text, input.dark, input.search, input.text, textarea{background-color: var(--bg); border: 1px solid var(--main_bg); color: var(--white_text);}\
	\
	.nim-peer .nim-peer--photo-w{border-radius: 0;}\
	.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic, .nim-dialog:not(.nim-dialog_deleted):hover{background-color: var(--bg);}\
	.im_fwd_log_wrap, .im_wall_log_wrap{border-left: 2px solid var(--main_bg);}\
	\
	.chat_onl_inner{background-color: var(--bg);}\
	.chat_tab_wrap:hover, .chat_tab_wrap:hover .chat_tab_imgcont.online.mobile:after, .chat_tab_imgcont.online.mobile:after{background-color: var(--main_bg); border-color: var(--main_bg);}\
	\
	.chat_tab_wrap:hover .chat_tab_imgcont.online:after, .chat_tab_imgcont.online:after{border-color: var(--main_bg)}\
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
