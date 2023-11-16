<script>
    import Avatar from "svelte-avatar";
    import md5 from "md5";
    import {hashCode} from "../hash.js";
    import Column from "./Column.svelte";
    import IconTag from "../tags/IconTag.svelte";
    import FaBuilding from 'svelte-icons-pack/fa/FaBuilding.js';
    import FaTimes from 'svelte-icons-pack/fa/FaTimesCircle.js';

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

    let iconCompany = {
        color: "#606060",
        src: FaBuilding
    };
    let iconNoCompany = {
        color: "#606060",
        src: FaTimes
    };
    let company = row["company"] === "Y" ? "Company" : "No Company";
</script>

<Column {className}>
    <div class="avatar">
        <Avatar bgColor="rgb({r},{g},{b})" name={name} src={url}></Avatar>
    </div>
    <div class="texts">
        <div class="name">{name}</div>
        <div class="email">{row["emails"]}</div>
        <IconTag text={company} className={company === "Company" ? "CompanyTag" : "NoCompanyTag"} icon={company === "Company" ? iconCompany : iconNoCompany} />
    </div>
</Column>

<style>
    :global(.column.userColumn) {
        display: flex;
    }

    :global(.Tag.CompanyTag) {
        background-color: #E5E8EC;
    }

    :global(.Tag.NoCompanyTag) {
        background-color: white;
        border: 1px solid #E5E8EC;
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