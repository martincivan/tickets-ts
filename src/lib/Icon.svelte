<script>
    export let i;
</script>

<span class="{i}"></span>

<style>
    /* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
    /* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
    /*
    @media screen and (-webkit-min-device-pixel-ratio:0) {
      @font-face {
        font-family: 'la-icon-font';
        src: url('../font/la-icon-font.svg?80137800#la-icon-font') format('svg');
      }
    }
    */
    [class^="la-"]:before, [class*=" la-"]:before {
        font-family: "la-icon-font";
        font-style: normal;
        font-weight: normal;
        speak: never;

        display: inline-block;
        text-decoration: inherit;
        width: 1em;
        margin-right: .2em;
        text-align: center;
        /* opacity: .8; */

        /* For safety - reset parent styles, that can break glyph codes*/
        font-variant: normal;
        text-transform: none;

        /* fix buttons height, for twitter bootstrap */
        line-height: 1em;

        /* Animation center compensation - margins should be symmetric */
        /* remove if not needed */
        margin-left: .2em;

        /* you can be more comfortable with increased icons size */
        /* font-size: 120%; */

        /* Font smoothing. That was taken from TWBS */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        /* Uncomment for 3D effect */
        /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
    }


    .la-camera-off:before {
        content: '\e800';
    }

    /* '' */
    .la-camera-on:before {
        content: '\e801';
    }

    /* '' */
    .la-hidden:before {
        content: '\e802';
    }

    /* '' */
    .la-checkbox-empty:before {
        content: '\e803';
    }

    /* '' */
    .la-checkbox-filled:before {
        content: '\e804';
    }

    /* '' */
    .la-knowledgebase:before {
        content: '\e805';
    }

    /* '' */
    .la-knowledgebase-disabled:before {
        content: '\e806';
    }

    /* '' */
    .la-locked:before {
        content: '\e807';
    }

    /* '' */
    .la-mic-off:before {
        content: '\e808';
    }

    /* '' */
    .la-mic-on:before {
        content: '\e809';
    }

    /* '' */
    .la-not-spam:before {
        content: '\e80a';
    }

    /* '' */
    .la-radio-button-empty:before {
        content: '\e80b';
    }

    /* '' */
    .la-radio-button-filled:before {
        content: '\e80c';
    }

    /* '' */
    .la-sound-off:before {
        content: '\e80d';
    }

    /* '' */
    .la-spam:before {
        content: '\e80e';
    }

    /* '' */
    .la-sound-on:before {
        content: '\e80f';
    }

    /* '' */
    .la-star-empty:before {
        content: '\e810';
    }

    /* '' */
    .la-star-filled:before {
        content: '\e811';
    }

    /* '' */
    .la-spin6:before {
        content: '\e812';
    }

    /* '' */
    .la-sync:before {
        content: '\e813';
    }

    /* '' */
    .la-unlocked:before {
        content: '\e814';
    }

    /* '' */
    .la-image:before {
        content: '\e815';
    }

    /* '' */
    .la-visible:before {
        content: '\e816';
    }

    /* '' */
    .la-alert-info:before {
        content: '\e817';
    }

    /* '' */
    .la-alert-warning:before {
        content: '\e818';
    }

    /* '' */
    .la-alert-critical:before {
        content: '\e819';
    }

    /* '' */
    .la-alert-debug:before {
        content: '\e81a';
    }

    /* '' */
    .la-alert-error:before {
        content: '\e81b';
    }

    /* '' */
    .la-calls:before {
        content: '\e81c';
    }

    /* '' */
    .la-dashboard:before {
        content: '\e81d';
    }

    /* '' */
    .la-getting-started:before {
        content: '\e81e';
    }

    /* '' */
    .la-chats:before {
        content: '\e81f';
    }

    /* '' */
    .la-internal-chat:before {
        content: '\e820';
    }

    /* '' */
    .la-note:before {
        content: '\e821';
    }

    /* '' */
    .la-reports:before {
        content: '\e822';
    }

    /* '' */
    .la-configuration:before {
        content: '\e823';
    }

    /* '' */
    .la-tickets:before {
        content: '\e824';
    }

    /* '' */
    .la-about:before {
        content: '\e825';
    }

    /* '' */
    .la-agent-ranking:before {
        content: '\e827';
    }

    /* '' */
    .la-agents:before {
        content: '\e828';
    }

    /* '' */
    .la-api:before {
        content: '\e829';
    }

    /* '' */
    .la-audit-log:before {
        content: '\e82a';
    }

    /* '' */
    .la-automation:before {
        content: '\e82b';
    }

    /* '' */
    .la-button:before {
        content: '\e82c';
    }

    /* '' */
    .la-queue:before {
        content: '\e82d';
    }

    /* '' */
    .la-call-load:before {
        content: '\e82e';
    }

    /* '' */
    .la-canned-messages:before {
        content: '\e82f';
    }

    /* '' */
    .la-companies:before {
        content: '\e830';
    }

    /* '' */
    .la-contact-fields:before {
        content: '\e831';
    }

    /* '' */
    .la-contact-form:before {
        content: '\e832';
    }

    /* '' */
    .la-contact-groups:before {
        content: '\e833';
    }

    /* '' */
    .la-contacts:before {
        content: '\e834';
    }

    /* '' */
    .la-department:before {
        content: '\e835';
    }

    /* '' */
    .la-elastic-search:before {
        content: '\e836';
    }

    /* '' */
    .la-email:before {
        content: '\e837';
    }

    /* '' */
    .la-spin5:before {
        content: '\e838';
    }

    /* '' */
    .la-event-logs:before {
        content: '\e839';
    }

    /* '' */
    .la-send:before {
        content: '\e83a';
    }

    /* '' */
    .la-forum:before {
        content: '\e83b';
    }

    /* '' */
    .la-gamification:before {
        content: '\e83c';
    }

    /* '' */
    .la-home:before {
        content: '\e83e';
    }

    /* '' */
    .la-channel:before {
        content: '\e83f';
    }

    /* '' */
    .la-chat:before {
        content: '\e840';
    }

    /* '' */
    .la-chat-load:before {
        content: '\e841';
    }

    /* '' */
    .la-chat-window:before {
        content: '\e842';
    }

    /* '' */
    .la-languages:before {
        content: '\e843';
    }

    /* '' */
    .la-mail-inbox:before {
        content: '\e845';
    }

    /* '' */
    .la-mail-outbox:before {
        content: '\e846';
    }

    /* '' */
    .la-notifications:before {
        content: '\e848';
    }

    /* '' */
    .la-online-visitors:before {
        content: '\e84a';
    }

    /* '' */
    .la-overview:before {
        content: '\e84b';
    }

    /* '' */
    .la-performance-report:before {
        content: '\e84c';
    }

    /* '' */
    .la-personal-details:before {
        content: '\e84d';
    }

    /* '' */
    .la-plugins:before {
        content: '\e84e';
    }

    /* '' */
    .la-predefined-answers:before {
        content: '\e84f';
    }

    /* '' */
    .la-protection:before {
        content: '\e850';
    }

    /* '' */
    .la-rules:before {
        content: '\e851';
    }

    /* '' */
    .la-search:before {
        content: '\e852';
    }

    /* '' */
    .la-signature:before {
        content: '\e854';
    }

    /* '' */
    .la-sla:before {
        content: '\e855';
    }

    /* '' */
    .la-sounds:before {
        content: '\e856';
    }

    /* '' */
    .la-suggestion:before {
        content: '\e857';
    }

    /* '' */
    .la-tags:before {
        content: '\e859';
    }

    /* '' */
    .la-maximize:before {
        content: '\e85a';
    }

    /* '' */
    .la-ticket-fields:before {
        content: '\e85b';
    }

    /* '' */
    .la-time-rules:before {
        content: '\e85c';
    }

    /* '' */
    .la-time-tracking:before {
        content: '\e85d';
    }

    /* '' */
    .la-tools:before {
        content: '\e85e';
    }

    /* '' */
    .la-minimize:before {
        content: '\e85f';
    }

    /* '' */
    .la-video-chat:before {
        content: '\e860';
    }

    /* '' */
    .la-plain-text:before {
        content: '\e861';
    }

    /* '' */
    .la-ticket-answered:before {
        content: '\e862';
    }

    /* '' */
    .la-ticket-deleted:before {
        content: '\e863';
    }

    /* '' */
    .la-category:before {
        content: '\e864';
    }

    /* '' */
    .la-ticket-open:before {
        content: '\e865';
    }

    /* '' */
    .la-ticket-postponed:before {
        content: '\e866';
    }

    /* '' */
    .la-ticket-resolved:before {
        content: '\e867';
    }

    /* '' */
    .la-unassigned:before {
        content: '\e868';
    }

    /* '' */
    .la-add-create:before {
        content: '\e869';
    }

    /* '' */
    .la-add-note:before {
        content: '\e86a';
    }

    /* '' */
    .la-add-tag:before {
        content: '\e86b';
    }

    /* '' */
    .la-assign-to-me:before {
        content: '\e86d';
    }

    /* '' */
    .la-attach-file:before {
        content: '\e86e';
    }

    /* '' */
    .la-attachment:before {
        content: '\e86f';
    }

    /* '' */
    .la-ban:before {
        content: '\e870';
    }

    /* '' */
    .la-broken-image:before {
        content: '\e871';
    }

    /* '' */
    .la-browser:before {
        content: '\e872';
    }

    /* '' */
    .la-ok:before {
        content: '\e873';
    }

    /* '' */
    .la-clear-field:before {
        content: '\e874';
    }

    /* '' */
    .la-crm:before {
        content: '\e875';
    }

    /* '' */
    .la-delete:before {
        content: '\e876';
    }

    /* '' */
    .la-design:before {
        content: '\e877';
    }

    /* '' */
    .la-dialpad:before {
        content: '\e878';
    }

    /* '' */
    .la-done:before {
        content: '\e879';
    }

    /* '' */
    .la-done-all:before {
        content: '\e87a';
    }

    /* '' */
    .la-download:before {
        content: '\e87b';
    }

    /* '' */
    .la-end-call:before {
        content: '\e87d';
    }

    /* '' */
    .la-exitclose:before {
        content: '\e87e';
    }

    /* '' */
    .la-export:before {
        content: '\e881';
    }

    /* '' */
    .la-filter:before {
        content: '\e882';
    }

    /* '' */
    .la-forward:before {
        content: '\e883';
    }

    /* '' */
    .la-forward-answer:before {
        content: '\e884';
    }

    /* '' */
    .la-fullscreen:before {
        content: '\e885';
    }

    /* '' */
    .la-graph-style-1:before {
        content: '\e886';
    }

    /* '' */
    .la-graph-style-2:before {
        content: '\e887';
    }

    /* '' */
    .la-graph-style-3:before {
        content: '\e888';
    }

    /* '' */
    .la-graph-style-4:before {
        content: '\e889';
    }

    /* '' */
    .la-hamburger-menu:before {
        content: '\e88a';
    }

    /* '' */
    .la-hide:before {
        content: '\e88b';
    }

    /* '' */
    .la-import:before {
        content: '\e88d';
    }

    /* '' */
    .la-incoming:before {
        content: '\e88e';
    }

    /* '' */
    .la-invite:before {
        content: '\e88f';
    }

    /* '' */
    .la-learn:before {
        content: '\e890';
    }

    /* '' */
    .la-link:before {
        content: '\e891';
    }

    /* '' */
    .la-log-out:before {
        content: '\e892';
    }

    /* '' */
    .la-mail-outline:before {
        content: '\e893';
    }

    /* '' */
    .la-mass-action:before {
        content: '\e894';
    }

    /* '' */
    .la-sla-log:before {
        content: '\e895';
    }

    /* '' */
    .la-merge:before {
        content: '\e896';
    }

    /* '' */
    .la-ticket-not-found:before {
        content: '\e897';
    }

    /* '' */
    .la-missed-call:before {
        content: '\e898';
    }

    /* '' */
    .la-more:before {
        content: '\e899';
    }

    /* '' */
    .la-move-down:before {
        content: '\e89a';
    }

    /* '' */
    .la-move-up:before {
        content: '\e89b';
    }

    /* '' */
    .la-next:before {
        content: '\e89c';
    }

    /* '' */
    .la-open-in-new-window:before {
        content: '\e89d';
    }

    /* '' */
    .la-outgoing:before {
        content: '\e89e';
    }

    /* '' */
    .la-pause:before {
        content: '\e89f';
    }

    /* '' */
    .la-phone-android:before {
        content: '\e8a1';
    }

    /* '' */
    .la-phone-ios:before {
        content: '\e8a2';
    }

    /* '' */
    .la-piping:before {
        content: '\e8a4';
    }

    /* '' */
    .la-play:before {
        content: '\e8a5';
    }

    /* '' */
    .la-previous:before {
        content: '\e8a7';
    }

    /* '' */
    .la-print:before {
        content: '\e8a8';
    }

    /* '' */
    .la-purge:before {
        content: '\e8a9';
    }

    /* '' */
    .la-quoted-text:before {
        content: '\e8aa';
    }

    /* '' */
    .la-refresh:before {
        content: '\e8ac';
    }

    /* '' */
    .la-reply:before {
        content: '\e8ad';
    }

    /* '' */
    .la-resolve:before {
        content: '\e8ae';
    }

    /* '' */
    .la-restore:before {
        content: '\e8af';
    }

    /* '' */
    .la-save:before {
        content: '\e8b0';
    }

    /* '' */
    .la-user:before {
        content: '\e8b1';
    }

    /* '' */
    .la-share:before {
        content: '\e8b2';
    }

    /* '' */
    .la-show:before {
        content: '\e8b3';
    }

    /* '' */
    .la-show-left:before {
        content: '\e8b4';
    }

    /* '' */
    .la-show-right:before {
        content: '\e8b5';
    }

    /* '' */
    .la-source-code:before {
        content: '\e8b6';
    }

    /* '' */
    .la-document:before {
        content: '\e8b7';
    }

    /* '' */
    .la-split:before {
        content: '\e8b8';
    }

    /* '' */
    .la-stop:before {
        content: '\e8b9';
    }

    /* '' */
    .la-sync-error:before {
        content: '\e8bb';
    }

    /* '' */
    .la-ticket-list:before {
        content: '\e8bc';
    }

    /* '' */
    .la-ticket-list-docked:before {
        content: '\e8bd';
    }

    /* '' */
    .la-transfer:before {
        content: '\e8be';
    }

    /* '' */
    .la-upload:before {
        content: '\e8bf';
    }

    /* '' */
    .la-upload-cloud:before {
        content: '\e8c0';
    }

    /* '' */
    .la-view:before {
        content: '\e8c1';
    }

    /* '' */
    .la-discount:before {
        content: '\e8c2';
    }

    /* '' */
    .la-done-rounded:before {
        content: '\e8c3';
    }

    /* '' */
    .la-ringing:before {
        content: '\e8c4';
    }

    /* '' */
    .la-edit:before {
        content: '\e8c5';
    }

    /* '' */
    .la-thumb-up:before {
        content: '\e8c6';
    }

    /* '' */
    .la-thumb-down:before {
        content: '\e8c7';
    }

    /* '' */
    .la-phone-ringing:before {
        content: '\e8c8';
    }

    /* '' */
    .la-category-forum:before {
        content: '\e8c9';
    }

    /* '' */
    .la-category-suggestion:before {
        content: '\e8ca';
    }

    /* '' */
    .la-copy:before {
        content: '\e8cb';
    }

    /* '' */
    .la-export-second:before {
        content: '\e8cd';
    }

    /* '' */
    .la-change-order:before {
        content: '\e8ce';
    }

    /* '' */
    .la-broken-licence:before {
        content: '\e8cf';
    }

    /* '' */
    .la-concurent-login:before {
        content: '\e8d0';
    }

    /* '' */
    .la-call-extension:before {
        content: '\e8d1';
    }

    /* '' */
    .la-ticket-new:before {
        content: '\e8d2';
    }

    /* '' */
    .la-timer:before {
        content: '\e8d3';
    }

    /* '' */
    .la-twitter:before {
        content: '\e8d4';
    }

    /* '' */
    .la-facebook:before {
        content: '\e8d5';
    }

    /* '' */
    .la-broadcast:before {
        content: '\e8d6';
    }

    /* '' */
    .la-available:before {
        content: '\e8d8';
    }

    /* '' */
    .la-history:before {
        content: '\e8d9';
    }

    /* '' */
    .la-no-permission:before {
        content: '\e8da';
    }

    /* '' */
    .la-select-none:before {
        content: '\e8db';
    }

    /* '' */
    .la-select-all:before {
        content: '\e8dc';
    }

    /* '' */
    .la-extension:before {
        content: '\e8dd';
    }

    /* '' */
    .la-mark-as-billed:before {
        content: '\e8de';
    }

    /* '' */
    .la-dollar:before {
        content: '\e8df';
    }

    /* '' */
    .la-retweet:before {
        content: '\e8e0';
    }

    /* '' */
    .la-instagram:before {
        content: '\e8e1';
    }

    /* '' */
    .la-slack:before {
        content: '\e8e2';
    }

    /* '' */
    .la-magento:before {
        content: '\e8e3';
    }

    /* '' */
    .la-secure:before {
        content: '\e8e4';
    }

    /* '' */
    .la-pricing:before {
        content: '\e8e5';
    }

    /* '' */
    .la-features:before {
        content: '\e8e6';
    }

    /* '' */
    .la-jira:before {
        content: '\e8e7';
    }

    /* '' */
    .la-instagram-mention:before {
        content: '\e8e8';
    }

    /* '' */
    .la-viber:before {
        content: '\e8e9';
    }

    /* '' */
    .la-pipedrive:before {
        content: '\e8ea';
    }

    /* '' */
    .la-calendar:before {
        content: '\e8eb';
    }

    /* '' */
    .la-mailbox:before {
        content: '\e8ec';
    }

    /* '' */
    .la-activecampaign-deals:before {
        content: '\e8ed';
    }

    /* '' */
    .la-activecampaign-campaigns:before {
        content: '\e8ee';
    }

    /* '' */
    .la-salesflare:before {
        content: '\e8ef';
    }

    /* '' */
    .la-github:before {
        content: '\e8f0';
    }

    /* '' */
    .la-pin:before {
        content: '\e8f1';
    }

    /* '' */
    .la-out-call:before {
        content: '\e8f2';
    }

    /* '' */
    .la-incomming-call:before {
        content: '\e8f3';
    }

    /* '' */
    .la-api-1:before {
        content: '\e8f4';
    }

    /* '' */
    .la-sip:before {
        content: '\e8f5';
    }

    /* '' */
    .la-wifi-off:before {
        content: '\e8f6';
    }

    /* '' */
    .la-mail-unsent:before {
        content: '\e8f7';
    }

    /* '' */
    .la-incomming-email:before {
        content: '\e8f8';
    }

    /* '' */
    .la-outgoing-email:before {
        content: '\e8f9';
    }

    /* '' */
    .la-internal-call:before {
        content: '\e8fa';
    }

    /* '' */
    .la-use-liveagent-servers:before {
        content: '\e8fb';
    }

    /* '' */
    .la-email-forwarding:before {
        content: '\e8fc';
    }

    /* '' */
    .la-email-piping:before {
        content: '\e8fd';
    }

    /* '' */
    .la-whatsapp:before {
        content: '\e8fe';
    }

    /* '' */
    .la-code-integration:before {
        content: '\e8ff';
    }

    /* '' */
    .la-tampermonkey:before {
        content: '\e900';
    }

    /* '' */
    .la-browser-1:before {
        content: '\e901';
    }

    /* '' */
    .la-rocket:before {
        content: '\e902';
    }

    /* '' */
    .la-export-html:before {
        content: '\e903';
    }

    /* '' */
    .la-reply-collapse:before {
        content: '\e904';
    }

    /* '' */
    .la-cron-job-integration:before {
        content: '\e905';
    }

    /* '' */
    .la-in-page-forms:before {
        content: '\e906';
    }

    /* '' */
    .la-call-internal:before {
        content: '\e907';
    }

    /* '' */
    .la-forum-topic:before {
        content: '\e908';
    }

    /* '' */
    .la-star-rounded:before {
        content: '\e909';
    }

    /* '' */
    .la-tag:before {
        content: '\e90a';
    }

    /* '' */
    .la-tracking-codes:before {
        content: '\e90b';
    }

    /* '' */
    .la-ban-history:before {
        content: '\e90c';
    }

    /* '' */
    .la-search-widget-disabled:before {
        content: '\e90d';
    }

    /* '' */
    .la-channel-report:before {
        content: '\e90e';
    }

    /* '' */
    .la-chat-sla-compliance:before {
        content: '\e90f';
    }

    /* '' */
    .la-agent-availability:before {
        content: '\e910';
    }

    /* '' */
    .la-settings-1:before {
        content: '\e911';
    }

    /* '' */
    .la-new:before {
        content: '\e912';
    }

    /* '' */
    .la-domain:before {
        content: '\e913';
    }

    /* '' */
    .la-disconnected:before {
        content: '\e914';
    }

    /* '' */
    .la-draft-message:before {
        content: '\e915';
    }

    /* '' */
    .la-customers-white:before {
        content: '\e916';
    }

    /* '' */
    .la-call-availability:before {
        content: '\e917';
    }

    /* '' */
    .la-phone:before {
        content: '\e918';
    }

    /* '' */
    .la-remote-audio-1:before {
        content: '\e919';
    }

    /* '' */
    .la-la-logo:before {
        content: '\e91a';
    }

    /* '' */
    .la-sound-configuration:before {
        content: '\e91c';
    }

    /* '' */
    .la-contact-button:before {
        content: '\e91d';
    }

    /* '' */
    .la-right:before {
        content: '\e91e';
    }

    /* '' */
    .la-left:before {
        content: '\e91f';
    }

    /* '' */
    .la-html:before {
        content: '\e920';
    }

    /* '' */
    .la-reward:before {
        content: '\e921';
    }

    /* '' */
    .la-department-report:before {
        content: '\e922';
    }

    /* '' */
    .la-keyboard-off:before {
        content: '\e923';
    }

    /* '' */
    .la-video-chat-setting:before {
        content: '\e924';
    }

    /* '' */
    .la-kb-setting-disabled:before {
        content: '\e925';
    }

    /* '' */
    .la-tour:before {
        content: '\e926';
    }

    /* '' */
    .la-play-all:before {
        content: '\e927';
    }

    /* '' */
    .la-remote-audio-3:before {
        content: '\e928';
    }

    /* '' */
    .la-sla-compliance:before {
        content: '\e929';
    }

    /* '' */
    .la-call-agent:before {
        content: '\e92a';
    }

    /* '' */
    .la-right-arrow:before {
        content: '\e92b';
    }

    /* '' */
    .la-cart:before {
        content: '\e92c';
    }

    /* '' */
    .la-disabled:before {
        content: '\e92d';
    }

    /* '' */
    .la-search-widgets:before {
        content: '\e92e';
    }

    /* '' */
    .la-feedback-btn-disabled:before {
        content: '\e92f';
    }

    /* '' */
    .la-insert:before {
        content: '\e930';
    }

    /* '' */
    .la-departments:before {
        content: '\e931';
    }

    /* '' */
    .la-invitation:before {
        content: '\e932';
    }

    /* '' */
    .la-pre-chat-form:before {
        content: '\e933';
    }

    /* '' */
    .la-ticket-related:before {
        content: '\e934';
    }

    /* '' */
    .la-call-devices:before {
        content: '\e935';
    }

    /* '' */
    .la-msg-sla-compliance:before {
        content: '\e936';
    }

    /* '' */
    .la-set-sla:before {
        content: '\e937';
    }

    /* '' */
    .la-forward-message:before {
        content: '\e938';
    }

    /* '' */
    .la-tickets-load:before {
        content: '\e939';
    }

    /* '' */
    .la-keyboard-on:before {
        content: '\e93a';
    }

    /* '' */
    .la-button-inline:before {
        content: '\e93b';
    }

    /* '' */
    .la-extensions:before {
        content: '\e93c';
    }

    /* '' */
    .la-design-kb:before {
        content: '\e93d';
    }

    /* '' */
    .la-chats-history:before {
        content: '\e93e';
    }

    /* '' */
    .la-export-pdf:before {
        content: '\e940';
    }

    /* '' */
    .la-mail-templates:before {
        content: '\e941';
    }

    /* '' */
    .la-calls-history:before {
        content: '\e942';
    }

    /* '' */
    .la-chat-transcript:before {
        content: '\e944';
    }

    /* '' */
    .la-inactive:before {
        content: '\e945';
    }

    /* '' */
    .la-sent:before {
        content: '\e946';
    }

    /* '' */
    .la-ticket_2:before {
        content: '\e947';
    }

    /* '' */
    .la-up:before {
        content: '\e948';
    }

    /* '' */
    .la-registration-mail:before {
        content: '\e949';
    }

    /* '' */
    .la-article:before {
        content: '\e94a';
    }

    /* '' */
    .la-chat-typing:before {
        content: '\e94b';
    }

    /* '' */
    .la-button-center:before {
        content: '\e94c';
    }

    /* '' */
    .la-left-arrow:before {
        content: '\e94d';
    }

    /* '' */
    .la-down:before {
        content: '\e94e';
    }

    /* '' */
    .la-feedback-button:before {
        content: '\e94f';
    }

    /* '' */
    .la-info:before {
        content: '\e950';
    }

    /* '' */
    .la-ticket:before {
        content: '\e951';
    }

    /* '' */
    .la-my-account:before {
        content: '\e952';
    }

    /* '' */
    .la-active:before {
        content: '\e953';
    }

    /* '' */
    .la-fail:before {
        content: '\e954';
    }

    /* '' */
    .la-ticket-history:before {
        content: '\e955';
    }

    /* '' */
    .la-button-corner:before {
        content: '\e956';
    }

    /* '' */
    .la-suggest-disabled:before {
        content: '\e957';
    }

    /* '' */
    .la-chat-buttons:before {
        content: '\e958';
    }

    /* '' */
    .la-sla-big:before {
        content: '\e959';
    }

    /* '' */
    .la-collapse:before {
        content: '\e95a';
    }

    /* '' */
    .la-call:before {
        content: '\e95b';
    }

    /* '' */
    .la-feedbacks:before {
        content: '\e95c';
    }

    /* '' */
    .la-contact-buttons:before {
        content: '\e95d';
    }

    /* '' */
    .la-agent-report:before {
        content: '\e95e';
    }

    /* '' */
    .la-chats-overview:before {
        content: '\e95f';
    }

    /* '' */
    .la-show-in-popup:before {
        content: '\e960';
    }

    /* '' */
    .la-offline-button:before {
        content: '\e961';
    }

    /* '' */
    .la-ivr:before {
        content: '\e962';
    }

    /* '' */
    .la-twilio:before {
        content: '\e963';
    }

    /* '' */
    .la-remote-audio-2:before {
        content: '\e964';
    }

    /* '' */
    .la-change-priority:before {
        content: '\e965';
    }

    /* '' */
    .la-resend:before {
        content: '\e966';
    }

    /* '' */
    .la-silent-resolve:before {
        content: '\e967';
    }

    /* '' */
    .la-in-queue:before {
        content: '\e968';
    }

    /* '' */
    .la-custom-css:before {
        content: '\e969';
    }

    /* '' */
    .la-rebuke:before {
        content: '\e96a';
    }

    /* '' */
    .la-customer-email-tpl:before {
        content: '\e96b';
    }

    /* '' */
    .la-trash:before {
        content: '\e96c';
    }

    /* '' */
    .la-ticket-error:before {
        content: '\e96d';
    }

    /* '' */
    .la-question-mark:before {
        content: '\e96e';
    }

    /* '' */
    .la-customer-portal:before {
        content: '\e96f';
    }

    /* '' */
    .la-cancel:before {
        content: '\e970';
    }

    /* '' */
    .la-pending:before {
        content: '\e971';
    }

    /* '' */
    .la-customerportal:before {
        content: '\e972';
    }

    /* '' */
    .la-call-button:before {
        content: '\e973';
    }

    /* '' */
    .la-ctr:before {
        content: '\e974';
    }

    /* '' */
    .la-agent-email-tpl:before {
        content: '\e975';
    }

    /* '' */
    .la-chatting:before {
        content: '\e976';
    }

    /* '' */
    .la-sun:before {
        content: '\e977';
    }

    /* '' */
    .la-moon:before {
        content: '\e978';
    }

    /* '' */
    .la-remote-audio-0:before {
        content: '\e979';
    }

    /* '' */
    .la-chat-availability:before {
        content: '\e97a';
    }

    /* '' */
    .la-tag-report:before {
        content: '\e97b';
    }

    /* '' */
    .la-start-chat:before {
        content: '\e97c';
    }

    /* '' */
    .la-chat-closed:before {
        content: '\e97d';
    }

    /* '' */
    .la-button-bubble:before {
        content: '\e97e';
    }

    /* '' */
    .la-call-window:before {
        content: '\e97f';
    }

    /* '' */
    .la-button-side:before {
        content: '\e980';
    }

    /* '' */
    .la-reply-to-topic:before {
        content: '\e981';
    }

    /* '' */
    .la-go-to-top:before {
        content: '\e982';
    }

    /* '' */

</style>