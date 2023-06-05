<script>
    import Avatar from "svelte-avatar";
    import md5 from "md5";

    export let row;

    let name = row["firstname"] + " " + row["lastname"];
    let url = row["avatarUrl"];
    if (!url) {
        url = "https://www.gravatar.com/avatar/" + md5(row["emails"][0]) + "?s=200&d=404";
    }

</script>

<div class="container">
    <div class="avatar">
        <Avatar name={name} src={url}></Avatar>
    </div>
    <div class="texts">
        <div class="name">{name}</div>
        <div class="email">{row["emails"]}</div>
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
    }

    .email {
        font-size: 12px;
        color: #606060;
    }

    .texts {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>