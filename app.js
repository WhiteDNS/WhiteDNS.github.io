const FALLBACK_REPOS = [
  {"name":"WhiteAesther","html_url":"https://github.com/WhiteDNS/WhiteAesther","description":"Cross-platform desktop client for the Aether connection core","language":"Rust","stargazers_count":153,"forks_count":6,"open_issues_count":4,"license":{"spdx_id":"AGPL-3.0"},"topics":[],"updated_at":"2026-08-29T11:04:31Z","pushed_at":"2026-08-28T01:51:30Z","created_at":"2026-08-08T06:38:38Z","default_branch":"main","homepage":null,"size":4038},
  {"name":"WhiteAestherMobile","html_url":"https://github.com/WhiteDNS/WhiteAestherMobile","description":"Native Android client for the Aether encrypted route engine","language":"Rust","stargazers_count":130,"forks_count":5,"open_issues_count":6,"license":{"spdx_id":"AGPL-3.0"},"topics":[],"updated_at":"2026-08-29T08:56:17Z","pushed_at":"2026-08-29T06:54:03Z","created_at":"2026-08-12T03:54:30Z","default_branch":"main","homepage":null,"size":11445},
  {"name":"WhiteVPN","html_url":"https://github.com/WhiteDNS/WhiteVPN","description":"A modern open-source VPN client for Android and Android TV, powered by Mihomo. Supports connection chaining, AmneziaWG v3, WireGuard, Hysteria2, subscription imports, connection testing, and a polished Persian/RTL experience.","language":"Kotlin","stargazers_count":180,"forks_count":7,"open_issues_count":1,"license":{"spdx_id":"GPL-3.0"},"topics":["hysteria2","mihomo","vless","vmess","vpn-client","wireguard"],"updated_at":"2026-08-28T20:27:47Z","pushed_at":"2026-08-26T00:28:18Z","created_at":"2026-07-20T03:05:00Z","default_branch":"main","homepage":"","size":17920},
  {"name":"WhiteVPN-Desktop","html_url":"https://github.com/WhiteDNS/WhiteVPN-Desktop","description":"WhiteVPN Desktop — Wails app running the same mihomo engine as WhiteVPN for Android","language":"Go","stargazers_count":244,"forks_count":11,"open_issues_count":8,"license":{"spdx_id":"GPL-3.0"},"topics":[],"updated_at":"2026-08-28T20:27:41Z","pushed_at":"2026-08-27T11:16:52Z","created_at":"2026-08-05T12:44:16Z","default_branch":"main","homepage":null,"size":9122},
  {"name":"WhiteDNS-Desktop","html_url":"https://github.com/WhiteDNS/WhiteDNS-Desktop","description":null,"language":"Go","stargazers_count":71,"forks_count":2,"open_issues_count":1,"license":{"spdx_id":"NOASSERTION"},"topics":[],"updated_at":"2026-08-28T20:03:50Z","pushed_at":"2026-08-06T07:08:34Z","created_at":"2026-07-29T04:49:27Z","default_branch":"main","homepage":null,"size":6059},
  {"name":"WhiteDNS-Wizard","html_url":"https://github.com/WhiteDNS/WhiteDNS-Wizard","description":"Cloudflare-first WhiteDNS CLI/TUI for provisioning a managed 3x-ui/Xray VPN stack over SSH, with DNS, certificates, client import links, Tor-routed profiles, diagnostics, backups, and repair/reset flows.","language":"Go","stargazers_count":364,"forks_count":29,"open_issues_count":19,"license":null,"topics":[],"updated_at":"2026-08-27T22:02:19Z","pushed_at":"2026-07-24T15:58:22Z","created_at":"2026-06-05T07:34:28Z","default_branch":"main","homepage":null,"size":891},
  {"name":"WhiteDNS-Android","html_url":"https://github.com/WhiteDNS/WhiteDNS-Android","description":"Source-available Android DNS tunneling client with VPN and proxy modes, backed by MasterDNS & StormDNS.","language":"Kotlin","stargazers_count":1283,"forks_count":82,"open_issues_count":40,"license":{"spdx_id":"NOASSERTION"},"topics":["masterdns","vpn","vpn-client"],"updated_at":"2026-08-27T10:08:29Z","pushed_at":"2026-07-28T05:44:46Z","created_at":"2026-05-10T05:27:42Z","default_branch":"main","homepage":"https://t.me/whitedns","size":56418},
  {"name":"subs-check","html_url":"https://github.com/WhiteDNS/subs-check","description":"订阅转换、测速、测活、流媒体检测、重命名、导出为任意格式订阅的工具","language":"Go","stargazers_count":17,"forks_count":3,"open_issues_count":0,"license":{"spdx_id":"GPL-3.0"},"topics":[],"updated_at":"2026-08-26T15:44:43Z","pushed_at":"2026-08-26T15:42:34Z","created_at":"2026-06-01T02:01:45Z","default_branch":"master","homepage":"https://t.me/subs_check","size":282280},
  {"name":"Aether","html_url":"https://github.com/WhiteDNS/Aether","description":"WhiteAesther’s fork of Aether, adding an embedded API for in-process use. AGPL-3.0.","language":"Rust","stargazers_count":11,"forks_count":0,"open_issues_count":0,"license":{"spdx_id":"AGPL-3.0"},"topics":[],"updated_at":"2026-08-26T06:57:35Z","pushed_at":"2026-08-25T15:49:32Z","created_at":"2026-08-13T07:15:54Z","default_branch":"whiteaesther","homepage":null,"size":4198},
  {"name":"IP-Range-Scout-Android","html_url":"https://github.com/WhiteDNS/IP-Range-Scout-Android","description":null,"language":"Kotlin","stargazers_count":149,"forks_count":7,"open_issues_count":0,"license":null,"topics":[],"updated_at":"2026-08-26T06:35:24Z","pushed_at":"2026-04-23T05:31:45Z","created_at":"2026-04-15T13:51:34Z","default_branch":"main","homepage":null,"size":303},
  {"name":"CottenDNS","html_url":"https://github.com/WhiteDNS/CottenDNS","description":null,"language":"Go","stargazers_count":84,"forks_count":6,"open_issues_count":0,"license":{"spdx_id":"NOASSERTION"},"topics":[],"updated_at":"2026-08-26T04:40:34Z","pushed_at":"2026-08-12T11:32:17Z","created_at":"2026-07-03T09:50:07Z","default_branch":"main","homepage":null,"size":3119},
  {"name":"WhiteDNS-cleanip-finder","html_url":"https://github.com/WhiteDNS/WhiteDNS-cleanip-finder","description":null,"language":"Go","stargazers_count":120,"forks_count":12,"open_issues_count":0,"license":null,"topics":[],"updated_at":"2026-08-24T00:48:31Z","pushed_at":"2026-08-14T23:08:31Z","created_at":"2026-06-21T12:37:19Z","default_branch":"main","homepage":null,"size":9325},
  {"name":"warp-relay","html_url":"https://github.com/WhiteDNS/warp-relay","description":"WhiteWarpScout Vercel Edge Registration Relay for Cloudflare WARP","language":"JavaScript","stargazers_count":0,"forks_count":2,"open_issues_count":0,"license":null,"topics":[],"updated_at":"2026-08-15T03:53:29Z","pushed_at":"2026-08-15T03:53:26Z","created_at":"2026-08-15T03:53:16Z","default_branch":"main","homepage":null,"size":1}
];

const languageColors = {
  Go: "var(--color-lang-go)",
  Kotlin: "var(--color-lang-kotlin)",
  Rust: "var(--color-lang-rust)",
  JavaScript: "var(--color-lang-js)",
  Other: "var(--color-lang-other)"
};

const state = {
  repos: FALLBACK_REPOS,
  query: "",
  language: "All",
  activeIndex: 0
};

const els = {
  grid: document.querySelector("[data-repo-grid]"),
  empty: document.querySelector("[data-empty]"),
  filters: document.querySelector("[data-filters]"),
  searchButtons: document.querySelectorAll("[data-open-search]"),
  cmdk: document.querySelector("[data-cmdk]"),
  cmdkInput: document.querySelector("[data-cmdk-input]"),
  cmdkResults: document.querySelector("[data-cmdk-results]"),
  repoCount: document.querySelector("[data-repo-count]"),
  starCount: document.querySelector("[data-star-count]"),
  forkCount: document.querySelector("[data-fork-count]"),
  langCount: document.querySelector("[data-lang-count]"),
  syncText: document.querySelector("[data-sync-text]")
};

const icon = {
  search: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m21 21-4.3-4.3"/><circle cx="11" cy="11" r="7"/></svg>',
  star: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.9-5.4 2.9 1-6-4.3-4.2 6-.9L12 3Z"/></svg>',
  fork: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="6" cy="5" r="2"/><circle cx="18" cy="5" r="2"/><circle cx="12" cy="19" r="2"/><path d="M6 7v3a4 4 0 0 0 4 4h2"/><path d="M18 7v3a4 4 0 0 1-4 4h-2v3"/></svg>',
  issue: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v6"/><path d="M12 17h.01"/></svg>',
  external: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M14 4h6v6"/><path d="M10 14 20 4"/><path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4"/></svg>',
  chevron: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
  code: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>'
};

function formatNumber(value) {
  return new Intl.NumberFormat("en", { notation: value > 999 ? "compact" : "standard" }).format(value || 0);
}

function formatDate(value) {
  if (!value) return "Unknown";
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(value));
}

function repoDescription(repo) {
  return repo.description || "No public description yet. Open the repository to inspect its README, source tree, and release notes.";
}

function languageOf(repo) {
  return repo.language || "Other";
}

function repoMatches(repo) {
  const q = state.query.trim().toLowerCase();
  const langOk = state.language === "All" || languageOf(repo) === state.language;
  const searchable = [repo.name, repo.description, repo.language, ...(repo.topics || [])].filter(Boolean).join(" ").toLowerCase();
  return langOk && (!q || searchable.includes(q));
}

function filteredRepos() {
  return state.repos.filter(repoMatches);
}

function renderStats() {
  const repos = state.repos;
  els.repoCount.textContent = repos.length;
  els.starCount.textContent = formatNumber(repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0));
  els.forkCount.textContent = formatNumber(repos.reduce((sum, repo) => sum + (repo.forks_count || 0), 0));
  els.langCount.textContent = new Set(repos.map(languageOf)).size;
}

function renderFilters() {
  const languages = ["All", ...Array.from(new Set(state.repos.map(languageOf))).sort()];
  els.filters.innerHTML = languages.map(lang => {
    const pressed = lang === state.language ? "true" : "false";
    const label = lang === "All" ? "All repos" : lang;
    return `<button class="filter-chip" type="button" aria-pressed="${pressed}" data-lang="${lang}">${label}</button>`;
  }).join("");

  els.filters.querySelectorAll("[data-lang]").forEach(button => {
    button.addEventListener("click", () => {
      state.language = button.dataset.lang;
      render();
    });
  });
}

function renderRepos() {
  const repos = filteredRepos();
  els.empty.classList.toggle("is-visible", repos.length === 0);
  els.grid.innerHTML = repos.map((repo, index) => {
    const lang = languageOf(repo);
    const dot = languageColors[lang] || languageColors.Other;
    const license = repo.license?.spdx_id || "No license";
    const topics = repo.topics?.length ? repo.topics.join(", ") : "No topics";
    const homepage = repo.homepage ? `<a href="${repo.homepage}" target="_blank" rel="noreferrer">${repo.homepage}</a>` : "Not set";
    return `
      <article class="repo-card" data-repo-card data-name="${repo.name}">
        <div class="repo-card__main">
          <div class="repo-card__top">
            <h3>${repo.name}</h3>
            <span class="pill"><span class="lang-dot" style="--dot: ${dot}"></span>${lang}</span>
          </div>
          <p class="repo-card__desc">${repoDescription(repo)}</p>
          <div class="repo-card__meta" aria-label="Repository statistics">
            <span class="pill">${icon.star}${formatNumber(repo.stargazers_count)}</span>
            <span class="pill">${icon.fork}${formatNumber(repo.forks_count)}</span>
            <span class="pill">${icon.issue}${formatNumber(repo.open_issues_count)}</span>
          </div>
          <div class="repo-card__links">
            <a class="repo-link" href="${repo.html_url}" target="_blank" rel="noreferrer">${icon.external}Open repo</a>
            <button class="details-toggle" type="button" aria-expanded="false" aria-controls="details-${index}" data-details-toggle>
              Details ${icon.chevron}
            </button>
          </div>
        </div>
        <div class="repo-card__details" id="details-${index}">
          <div>
            <dl class="detail-list">
              <div class="detail-row"><dt>Updated</dt><dd>${formatDate(repo.updated_at)}</dd></div>
              <div class="detail-row"><dt>Pushed</dt><dd>${formatDate(repo.pushed_at)}</dd></div>
              <div class="detail-row"><dt>Created</dt><dd>${formatDate(repo.created_at)}</dd></div>
              <div class="detail-row"><dt>Branch</dt><dd>${repo.default_branch || "main"}</dd></div>
              <div class="detail-row"><dt>License</dt><dd>${license}</dd></div>
              <div class="detail-row"><dt>Topics</dt><dd>${topics}</dd></div>
              <div class="detail-row"><dt>Homepage</dt><dd>${homepage}</dd></div>
            </dl>
          </div>
        </div>
      </article>
    `;
  }).join("");

  els.grid.querySelectorAll("[data-details-toggle]").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-repo-card]");
      const open = !card.classList.contains("is-open");
      card.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", String(open));
    });
  });
}

function renderCommandResults() {
  const repos = filteredRepos();
  state.activeIndex = Math.min(state.activeIndex, Math.max(repos.length - 1, 0));
  els.cmdkResults.innerHTML = repos.map((repo, index) => `
    <button class="cmdk__item ${index === state.activeIndex ? "is-active" : ""}" type="button" data-result-index="${index}">
      <span>${repo.name}<br><small>${languageOf(repo)} · ${formatNumber(repo.stargazers_count)} stars</small></span>
      ${icon.external}
    </button>
  `).join("");

  els.cmdkResults.querySelectorAll("[data-result-index]").forEach(button => {
    button.addEventListener("click", () => {
      const repo = repos[Number(button.dataset.resultIndex)];
      window.open(repo.html_url, "_blank", "noopener,noreferrer");
    });
  });
}

function render() {
  renderStats();
  renderFilters();
  renderRepos();
  renderCommandResults();
}

function openCmdk() {
  els.cmdk.classList.add("is-open");
  els.cmdk.setAttribute("aria-hidden", "false");
  els.cmdkInput.value = state.query;
  requestAnimationFrame(() => els.cmdkInput.focus());
}

function closeCmdk() {
  els.cmdk.classList.remove("is-open");
  els.cmdk.setAttribute("aria-hidden", "true");
}

els.searchButtons.forEach(button => button.addEventListener("click", openCmdk));
els.cmdk.addEventListener("click", event => {
  if (event.target === els.cmdk) closeCmdk();
});

els.cmdkInput.addEventListener("input", event => {
  state.query = event.target.value;
  state.activeIndex = 0;
  renderRepos();
  renderCommandResults();
});

document.addEventListener("keydown", event => {
  const cmd = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
  if (cmd) {
    event.preventDefault();
    openCmdk();
  }
  if (event.key === "Escape") closeCmdk();
  if (!els.cmdk.classList.contains("is-open")) return;
  const repos = filteredRepos();
  if (event.key === "ArrowDown") {
    event.preventDefault();
    state.activeIndex = Math.min(state.activeIndex + 1, repos.length - 1);
    renderCommandResults();
  }
  if (event.key === "ArrowUp") {
    event.preventDefault();
    state.activeIndex = Math.max(state.activeIndex - 1, 0);
    renderCommandResults();
  }
  if (event.key === "Enter" && repos[state.activeIndex]) {
    window.open(repos[state.activeIndex].html_url, "_blank", "noopener,noreferrer");
  }
});

async function hydrateFromGitHub() {
  try {
    const response = await fetch("https://api.github.com/orgs/WhiteDNS/repos?per_page=100&sort=updated", {
      headers: { Accept: "application/vnd.github+json" }
    });
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
    const data = await response.json();
    state.repos = data.filter(repo => !repo.private);
    els.syncText.textContent = `Live from GitHub · synced ${new Intl.DateTimeFormat("en", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date())}`;
    render();
  } catch (error) {
    els.syncText.textContent = "Snapshot mode · GitHub API was not reachable";
  }
}

render();
hydrateFromGitHub();
