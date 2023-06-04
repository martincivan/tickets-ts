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
    <span>
        <div>{name}</div>
        <div>{row["emails"]}</div>
    </span>
</div>

<style>
    .container {
        display: flex;
    }
    .avatar {
        margin-right: 10px;
    }
</style>