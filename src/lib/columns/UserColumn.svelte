<script>
    import Avatar from "svelte-avatar";
    import md5 from "md5";
    import {hashCode} from "../hash.js";

    export let row;

    let name = (row["firstname"] + " " + row["lastname"]);
    if (!name.trim()) {
        name = row["systemName"];
    }
    let url = row["avatarUrl"];
    if (!url) {
        url = "https://www.gravatar.com/avatar/" + md5(row["emails"][0] ?? "") + "?s=200&d=404";
    }

    let hash = hashCode(name + row["emails"])
    let r = (hash & 0xFF0000) >> 16;
    let g = (hash & 0x00FF00) >> 8;
    let b = hash & 0x0000FF;
    if (r + g + b < 150) {
        r = 150;
    }
    if (r + g + b > 400) {
        r = 0;
    }


</script>

<div class="container">
    <div class="avatar">
        <Avatar bgColor="rgb({r},{g},{b})" name={name} src={url}></Avatar>
    </div>
    <div class="texts">
        <div class="name">{name}</div>
        <div class="email">{row["emails"]}</div>
        {#if Array.isArray(row["phones"]) && row["phones"].length > 0}
            <div class="email">{row["phones"]}</div>
        {/if}
    </div>
</div>

<style>
    .container {
        display: flex;

    }

    .avatar {
        margin-right: 10px;
    }

    .name {
        font-size: 14px;
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .email {
        font-size: 12px;
        color: #606060;
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .texts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>