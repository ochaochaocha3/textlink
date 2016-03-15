pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.debug", false);

// load to...
//   0  = do nothing
//   2  = only select
//   4  = load in current tab
//   8  = open in window
//   16 = new tab
//   32 = new background tab
// referrer
//   0  = send
//   1  = don't send (stealth)
// example:
//   4  + 1 = 5  : load in current tab without referrer
//   16 + 0 = 16 : open new foreground tab with referrer
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.0.action",        16);
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.0.trigger.mouse", "dblclick");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.0.trigger.key",   "VK_ENTER");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.1.action",        32);
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.1.trigger.mouse", "shift-dblclick");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.1.trigger.key",   "shift-VK_ENTER");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.2.action",        4);
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.2.trigger.mouse", "accel-dblclick");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.2.trigger.key",   "accel-VK_ENTER");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.3.action",        0);
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.3.trigger.mouse", "");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.3.trigger.key",   "");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.4.action",        0);
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.4.trigger.mouse", "");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.4.trigger.key",   "");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.5.action",        0);
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.5.trigger.mouse", "");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.actions.5.trigger.key",   "");
// you can add more and more definitions!

pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.contextmenu.submenu",              true);
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.contextmenu.openTextLink.current", false);
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.contextmenu.openTextLink.window",  false);
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.contextmenu.openTextLink.tab",     false);
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.contextmenu.openTextLink.copy",    false);

pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.messenger.linkify", true);

pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.scheme",            "http https ftp news nntp telnet irc mms ed2k about file urn chrome resource data");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.scheme.fixup.table", "www=>http://www ftp.=>ftp://ftp. irc.=>irc:irc. h??p=>http h???s=>https ttp=>http tp=>http p=>http ttps=>https tps=>https ps=>https");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.scheme.fixup.default", "http");

pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.relative.enabled",    false);
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.multibyte.enabled",   true);
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.multiline.enabled",   false);
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.idn.enabled",         true);
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.idn.scheme",          "http https ftp news nntp telnet irc");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.i18nPath.enabled",    false);
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.part.exception.whole", "-+|=+|(?:-=)+-?|(?:=-)=?|\\#+|\\++|\\*+|~+|[+-]?\\d+:\\d+(?::\\d+)?");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.part.exception.start", "-+|=+|(?:-=)+-?|(?:=-)=?|\\#+|\\++|\\*+|~+|[+-]?\\d+:\\d+(?::\\d+)?|[\\.\u3002\uff0e]+[^\\.\u3002\uff0e\/\uff0f]");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.part.exception.end",   "-+|=+|(?:-=)+-?|(?:=-)=?|\\#+|\\++|\\*+|~+|[+-]?\\d+:\\d+(?::\\d+)?");

pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.idn.lazyDetection.separators", "\u3001\u3002");

pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.find_click_point.strict", true);


// http://www4.plala.or.jp/nomrax/TLD/ 
// http://ja.wikipedia.org/wiki/%E3%83%88%E3%83%83%E3%83%97%E3%83%AC%E3%83%99%E3%83%AB%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E4%B8%80%E8%A6%A7
// http://en.wikipedia.org/wiki/List_of_Internet_top-level_domains
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.gTLD", "
		aero
		arpa
		asia
		biz
		cat
		com
		coop
		edu
		gov
		info
		int
		jobs
		mil
		mobi
		museum
		name
		nato
		net
		org
		pro
		tel
		travel
	");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.ccTLD", "
		ac
		ad
		ae
		af
		ag
		ai
		al
		am
		an
		ao
		aq
		ar
		as
		at
		au
		aw
		ax
		az
		ba
		bb
		bd
		be
		bf
		bg
		bh
		bi
		bj
		bm
		bn
		bo
		br
		bs
		bt
		bv
		bw
		by
		bz
		ca
		cc
		cd
		cf
		cg
		ch
		ci
		ck
		cl
		cm
		cn
		co
		cr
		cs
		cu
		cv
		cx
		cy
		cz
		dd
		de
		dj
		dk
		dm
		do
		dz
		ec
		ee
		eg
		eh
		er
		es
		et
		eu
		fi
		fj
		fk
		fm
		fo
		fr
		ga
		gb
		gd
		ge
		gf
		gg
		gh
		gi
		gl
		gm
		gn
		gp
		gq
		gr
		gs
		gt
		gu
		gw
		gy
		hk
		hm
		hn
		hr
		ht
		hu
		id
		ie
		il
		im
		in
		io
		iq
		ir
		is
		it
		je
		jm
		jo
		jp
		ke
		kg
		kh
		ki
		km
		kn
		kp
		kr
		kw
		ky
		kz
		la
		lb
		lc
		li
		lk
		lr
		ls
		lt
		lu
		lv
		ly
		ma
		mc
		md
		me
		mg
		mh
		mk
		ml
		mm
		mn
		mo
		mp
		mq
		mr
		ms
		mt
		mu
		mv
		mw
		mx
		my
		mz
		na
		nc
		ne
		nf
		ng
		ni
		nl
		no
		np
		nr
		nu
		nz
		om
		pa
		pe
		pf
		pg
		ph
		pk
		pl
		pm
		pn
		pr
		ps
		pt
		pw
		py
		qa
		re
		ro
		rs
		ru
		rw
		sa
		sb
		sc
		sd
		se
		sg
		sh
		si
		sj
		sk
		sl
		sm
		sn
		so
		sr
		st
		su
		sv
		sy
		sz
		tc
		td
		tf
		tg
		th
		tj
		tk
		tl
		tm
		tn
		to
		tp
		tr
		tt
		tv
		tw
		tz
		ua
		ug
		uk
		um
		us
		uy
		uz
		va
		vc
		ve
		vg
		vi
		vn
		vu
		wf
		ws
		ye
		yt
		yu
		za
		zm
		zr
		zw
	");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.IDN_TLD", "
		\u4e2d\u56fd
		\u4e2d\u570b
		\u0645\u0635\u0631
		\u9999\u6e2f
		\u0627\u06cc\u0631\u0627\u0646
		\u0627\u0644\u0627\u0631\u062f\u0646
		\u0641\u0644\u0633\u0637\u064a\u0646
		\u0440\u0444
		\u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629
		\u0dbd\u0d82\u0d9a\u0dcf
		\u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8
		\u53f0\u6e7e
		\u53f0\u7063
		\u0e44\u0e17\u0e22
		\u062a\u0648\u0646\u0633
		\u0627\u0645\u0627\u0631\u0627\u062a
	");
pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.extraTLD", "");


pref("extensions.{54BB9F3F-07E5-486c-9B39-C7398B99391C}.textlink.prefsVersion", 0);
