<script>
    import Avatar from "svelte-avatar";
    import md5 from "md5";
    import {hashCode} from "../common/hash.js";
    import Column from "./Column.svelte";
    import IconTag from "../tags/IconTag.svelte";

    export let row;
    export let className = "userColumn";

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
    let company = row["company"] === "Y" ? "Company" : "No Company";
</script>

<Column {className}>
    <div class="avatar">
        <Avatar bgColor="rgb({r},{g},{b})" name={name} src={url}></Avatar>
    </div>
    <div class="texts">
        <div class="name">{name}</div>
        <div class="email">{row["emails"]}</div>
        <IconTag text={company} className={company === "Company" ? "CompanyTag" : "NoCompanyTag"} iconVariable="la-companies" />
    </div>
</Column>

<style>
    :global(.Column.userColumn) {
        display: flex;
    }

    :global(.Tag.CompanyTag) {
        background-color: var(--department-bg-color);
        color: var(--main-textcolor);
    }

    :global(.Tag.NoCompanyTag) {
        background-color: white;
        color: var(--main-lighter-textcolor);
        border: 1px solid var(--main-lighter-textcolor);
    }


    .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;
    }

    .name {
        font-size: 13px;
        line-height: 20px;
        font-weight: bold;
    }

    .email {
        font-size: 13px;
        line-height: 20px;
    }

    .texts {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>