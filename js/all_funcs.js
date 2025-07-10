// js寫法放icon在尾部

function append_icon() {
    let all_a = document.getElementsByTagName("a");
    for (let i = 0; i < all_a.length; i++) {
        // console.log(i);
        console.log(all_a[i].getAttribute("target"));

        if (all_a[i].getAttribute("target") === "_blank") {
            all_a[i].insertAdjacentHTML("beforeend", '<img src="https://alldata.sgp1.digitaloceanspaces.com/images/external_link.png" class="icon_external">');
        }
    }
}
