<div align="center">

<pre>
              _        _             _ _            
  ___ ___ ___| |_ __ _| |_ _   _ ___| (_)_ __   ___ 
 / __/ __/ __| __/ _` | __| | | / __| | | '_ \ / _ \
| (_| (__\__ \ || (_| | |_| |_| \__ \ | | | | |  __/
 \___\___|___/\__\__,_|\__|\__,_|___/_|_|_| |_|\___|
                                                     
</pre>

# ccmirrorstaline

**🎨 A highly customizable status line formatter for Claude Code CLI with AirCodeMirror integration**
*Display model info, git branch, token usage, AirCodeMirror metrics, and other information in your terminal*

> **🙏 Acknowledgments**: This project builds upon excellent open source foundations:
> - **Core functionality** forked from [ccstatusline](https://github.com/hesreallyhim/ccstatusline) by [@hesreallyhim](https://github.com/hesreallyhim) - All the powerful status line features (widgets, TUI, PowerLine support, git integration, token tracking, etc.) come from this amazing project
> - **AirCodeMirror integration** inspired by [cc-aicodemirror-statusline-plus](https://github.com/Bozhu12/cc-aicodemirror-statusline-plus) by [@Bozhu12](https://github.com/Bozhu12) - API patterns and concepts for AirCodeMirror credits tracking
> 
> We extend our gratitude to both projects for their innovative work and open source contributions to the Claude Code community.

[![npm version](https://img.shields.io/npm/v/ccmirrorstaline.svg)](https://www.npmjs.com/package/ccmirrorstaline)
[![npm downloads](https://img.shields.io/npm/dm/ccmirrorstaline.svg)](https://www.npmjs.com/package/ccmirrorstaline)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sirmalloc/ccmirrorstaline/blob/main/LICENSE)
[![Node.js Version](https://img.shields.io/node/v/ccmirrorstaline.svg)](https://nodejs.org)
[![install size](https://packagephobia.com/badge?p=ccmirrorstaline)](https://packagephobia.com/result?p=ccmirrorstaline)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/sirmalloc/ccmirrorstaline/graphs/commit-activity)

[![Mentioned in Awesome Claude Code](https://awesome.re/mentioned-badge.svg)](https://github.com/hesreallyhim/awesome-claude-code)
[![ClaudeLog - A comprehensive knowledge base for Claude](https://claudelog.com/img/claude_log_badge.svg)](https://claudelog.com/)


![Demo](https://raw.githubusercontent.com/sirmalloc/ccmirrorstaline/main/screenshots/demo.gif)

</div>

## 📚 Table of Contents

- [Recent Updates](#-recent-updates)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Usage](#-usage)
- [Development](#️-development)
- [Contributing](#-contributing)
- [License](#-license)
- [Related Projects](#-related-projects)

---

## 🆕 Recent Updates

### v1.0.0 - Initial Release (Fork from ccstatusline)

🎉 **Welcome to ccmirrorstaline!** This is a fork of ccstatusline with **AirCodeMirror integration** added:

#### 🪞 **NEW: AirCodeMirror Integration**
*The only new functionality added to ccstatusline*
- **AirCodeMirror Credits Display** - New dedicated widget to track and display accumulated AirCodeMirror credits
- **Auto-Reset Functionality** - Smart automatic credit reset capabilities for better session tracking
- **Real-time Metrics** - Live updates of your AirCodeMirror usage statistics

#### 🙏 **All Other Features Inherited from ccstatusline**
*All the powerful functionality below comes from the original ccstatusline project:*
- **👾 Emoji Support** - Full emoji support in custom text widgets
- **🚀 Unlimited Status Lines** - No limit on the number of configurable status lines
- **🌳 Git Integration** - Comprehensive git status and worktree support
- **🎯 PowerLine Auto-Alignment** - Beautiful columnar layouts in PowerLine mode
- **📁 Current Working Directory** - Flexible path display options
- **💰 Token Tracking** - Comprehensive Claude Code token usage metrics
  - Automatically truncates long paths with ellipsis
- **💰 Session Cost Widget** - Track your Claude Code session costs (requires Claude Code 1.0.85+)
  - Displays total session cost in USD
  - Supports raw value mode (shows just `$X.YZ` vs `Cost: $X.YZ`)
  - Real-time cost tracking from Claude Code session data
  - Note: Cost may not update properly when using `/resume` (Claude Code limitation)
- **🐛 Bug Fixes**
  - Fixed Block Timer calculations for accurate time tracking across block boundaries
  - Improved widget editor stability with proper Ctrl+S handling
  - Enhanced cursor display in numeric input fields

### v2.0.2 - Block Timer Widget
*Inherited from ccstatusline*

![Block Timer](https://raw.githubusercontent.com/sirmalloc/ccmirrorstaline/main/screenshots/blockTimerSmall.png)

- **⏱️ Block Timer** - Track your progress through 5-hour Claude Code blocks
  - Displays time elapsed in current block as hours/minutes (e.g., "3hr 45m")
  - Progress bar mode shows visual completion percentage
  - Two progress bar styles: full width (32 chars) or compact (16 chars)
  - Automatically detects block boundaries from transcript timestamps

### v2.0.0 - Powerline Support & Enhanced Themes
*Inherited from ccstatusline*
- **⚡ Powerline Mode** - Beautiful Powerline-style status lines with arrow separators and customizable caps
- **🎨 Built-in Themes** - Multiple pre-configured themes that you can copy and customize
- **🌈 Advanced Color Support** - Basic (16), 256-color (with custom ANSI codes), and truecolor (with hex codes) modes
- **🔗 Widget Merging** - Merge multiple widgets together with or without padding for seamless designs
- **📦 Easy Installation** - Install directly with `npx` or `bunx` - no global package needed
- **🔤 Custom Separators** - Add multiple Powerline separators with custom hex codes for font support
- **🚀 Auto Font Install** - Automatic Powerline font installation with user consent

---

## ✨ Features

*Note: Unless specifically marked as "NEW", all features are inherited from the excellent ccstatusline project*

- **📊 Real-time Metrics** - Display model name, git branch, token usage, session duration, block timer, and more
- **🪞 AirCodeMirror Integration** - **NEW**: Track and display AirCodeMirror credits with auto-reset functionality  
- **🎨 Fully Customizable** - Choose what to display and customize colors for each element
- **⚡ Powerline Support** - Beautiful Powerline-style rendering with arrow separators, caps, and custom fonts
- **📐 Multi-line Support** - Configure multiple independent status lines
- **🖥️ Interactive TUI** - Built-in configuration interface using React/Ink
- **⚙️ Global Options** - Apply consistent formatting across all widgets (padding, separators, bold, background)
- **🚀 Cross-platform** - Works seamlessly with both Bun and Node.js
- **📏 Smart Width Detection** - Automatically adapts to terminal width with flex separators
- **⚡ Zero Config** - Sensible defaults that work out of the box

---

## 🚀 Quick Start

### No installation needed! Use directly with npx or bunx:

```bash
# Run the configuration TUI with npm
npx ccmirrorstaline@latest

# Or with Bun (faster)
bunx ccmirrorstaline@latest
```

### Configure ccmirrorstaline

The interactive configuration tool provides a terminal UI where you can:
- Configure multiple separate status lines
- Add/remove/reorder status line widgets
- Customize colors for each widget
- Configure flex separator behavior
- Edit custom text widgets
- Install/uninstall to Claude Code settings
- Preview your status line in real-time

> 💡 **Tip:** Your settings are automatically saved to `~/.config/ccmirrorstaline/settings.json`

---

## 📖 Usage

Once configured, ccmirrorstaline automatically formats your Claude Code status line. The status line appears at the bottom of your terminal during Claude Code sessions.

### 📊 Available Widgets

*Note: Unless marked as "NEW", all widgets are inherited from ccstatusline*

- **Model Name** - Shows the current Claude model (e.g., "Claude 3.5 Sonnet")
- **AirCodeMirror Credits** - **NEW**: Shows accumulated AirCodeMirror credits with auto-reset functionality  
- **Git Branch** - Displays current git branch name
- **Git Changes** - Shows uncommitted insertions/deletions (e.g., "+42,-10")
- **Git Worktree** - Shows the name of the current git worktree
- **Session Clock** - Shows elapsed time since session start (e.g., "2hr 15m")
- **Session Cost** - Shows total session cost in USD (e.g., "$1.23")
- **Block Timer** - Shows time elapsed in current 5-hour block or progress bar
- **Current Working Directory** - Shows current working directory with configurable path segments
- **Version** - Shows Claude Code version
- **Output Style** - Shows the currently set output style in Claude Code
- **Tokens Input** - Shows input tokens used
- **Tokens Output** - Shows output tokens used
- **Tokens Cached** - Shows cached tokens used
- **Tokens Total** - Shows total tokens used
- **Context Length** - Shows current context length in tokens
- **Context Percentage** - Shows percentage of context limit used (out of 200k)
- **Context Percentage (usable)** - Shows percentage of usable context (out of 160k, accounting for auto-compact at 80%)
- **Terminal Width** - Shows detected terminal width (for debugging)
- **Custom Text** - Add your own custom text to the status line
- **Custom Command** - Execute shell commands and display their output (refreshes whenever the statusline is updated by Claude Code)
- **Separator** - Visual divider between widgets (customizable: |, -, comma, space)
- **Flex Separator** - Expands to fill available space

---

### Terminal Width Options
These settings affect where long lines are truncated, and where right-alignment occurs when using flex separators:
- **Full width always** - Uses full terminal width (may wrap if auto-compact message appears or IDE integration adds text)
- **Full width minus 40** - Reserves 40 characters for auto-compact message to prevent wrapping (default)
- **Full width until compact** - Dynamically switches between full width and minus 40 based on context percentage threshold (configurable, default 60%)

---

### ⚙️ Global Options

Configure global formatting preferences that apply to all widgets:

![Global Options](https://raw.githubusercontent.com/sirmalloc/ccmirrorstaline/main/screenshots/global.png)

#### Default Padding & Separators
- **Default Padding** - Add consistent padding to the left and right of each widget
- **Default Separator** - Automatically insert a separator between all widgets
  - Press **(p)** to edit padding
  - Press **(s)** to edit separator

<details>
<summary><b>Global Formatting Options</b></summary>

- **Inherit Colors** - Default separators inherit foreground and background colors from the preceding widget
  - Press **(i)** to toggle
- **Global Bold** - Apply bold formatting to all text regardless of individual widget settings
  - Press **(o)** to toggle
- **Override Foreground Color** - Force all widgets to use the same text color
  - Press **(f)** to cycle through colors
  - Press **(g)** to clear override
- **Override Background Color** - Force all widgets to use the same background color
  - Press **(b)** to cycle through colors
  - Press **(c)** to clear override

</details>

> 💡 **Note:** These settings are applied during rendering and don't add widgets to your widget list. They provide a consistent look across your entire status line without modifying individual widget configurations.

> ⚠️ **VSCode Users:** If colors appear incorrect in the VSCode integrated terminal, the "Terminal › Integrated: Minimum Contrast Ratio" (`terminal.integrated.minimumContrastRatio`) setting is forcing a minimum contrast between foreground and background colors. You can adjust this setting to 1 to disable the contrast enforcement, or use a standalone terminal for accurate colors.

### ⏱️ Block Timer Widget

The Block Timer widget helps you track your progress through Claude Code's 5-hour conversation blocks:

![Block Timer](https://raw.githubusercontent.com/sirmalloc/ccmirrorstaline/main/screenshots/blockTimer.png)

**Display Modes:**
- **Time Display** - Shows elapsed time as "3hr 45m" (default)
- **Progress Bar** - Full width 32-character progress bar with percentage
- **Progress Bar (Short)** - Compact 16-character progress bar with percentage

**Features:**
- Automatically detects block boundaries from transcript timestamps
- Floors block start time to the hour for consistent tracking
- Shows "Block: 3hr 45m" in normal mode or just "3hr 45m" in raw value mode
- Progress bars show completion percentage (e.g., "[████████████████████████░░░░░░░░] 73.9%")
- Toggle between modes with the **(p)** key in the widgets editor

### 🔤 Raw Value Mode

Some widgets support "raw value" mode which displays just the value without a label:
- Normal: `Model: Claude 3.5 Sonnet` → Raw: `Claude 3.5 Sonnet`
- Normal: `Session: 2hr 15m` → Raw: `2hr 15m`
- Normal: `Block: 3hr 45m` → Raw: `3hr 45m`
- Normal: `Ctx: 18.6k` → Raw: `18.6k`

---

### 🔧 Custom Widgets

#### Custom Text Widget
Add static text to your status line. Perfect for:
- Project identifiers
- Environment indicators (dev/prod)
- Personal labels or reminders

#### Custom Command Widget
Execute shell commands and display their output dynamically:
- Refreshes whenever the statusline is updated by Claude Code
- Receives the full Claude Code JSON data via stdin (model info, session ID, transcript path, etc.)
- Displays command output inline in your status line
- Configurable timeout (default: 1000ms)
- Examples:
  - `pwd | xargs basename` - Show current directory name
  - `node -v` - Display Node.js version
  - `git rev-parse --short HEAD` - Show current commit hash
  - `date +%H:%M` - Display current time
  - `curl -s wttr.in?format="%t"` - Show current temperature
  - `npx -y ccusage@latest statusline` - Display Claude usage metrics (set timeout: 5000ms)

> ⚠️ **Important:** Commands should complete quickly to avoid delays. Long-running commands will be killed after the configured timeout. If you're not seeing output from your custom command, try increasing the timeout value (press 't' in the editor).

> 💡 **Tip:** Custom commands can be other Claude Code compatible status line formatters! They receive the same JSON via stdin that ccmirrorstaline receives from Claude Code, allowing you to chain or combine multiple status line tools.

---

### 🔗 Integration Example: ccusage

[ccusage](https://github.com/ryoppippi/ccusage) is a tool that tracks and displays Claude Code usage metrics. You can integrate it directly into your status line:

1. Add a Custom Command widget
2. Set command: `npx -y ccusage@latest statusline`
3. Set timeout: `5000` (5 seconds for initial download)
4. Enable "preserve colors" to keep ccusage's color formatting

![ccusage integration](https://raw.githubusercontent.com/sirmalloc/ccmirrorstaline/main/screenshots/ccusage.png)

> 📄 **How it works:** The command receives Claude Code's JSON data via stdin, allowing ccusage to access session information, model details, and transcript data for accurate usage tracking.

### ✂️ Smart Truncation

When terminal width is detected, status lines automatically truncate with ellipsis (...) if they exceed the available width, preventing line wrapping.

---

## 🛠️ Development

### Prerequisites

- [Bun](https://bun.sh) (v1.0+)
- Git
- Node.js 18+ (optional, for npm publishing)

### Setup

```bash
# Clone the repository
git clone https://github.com/sirmalloc/ccmirrorstaline.git
cd ccmirrorstaline

# Install dependencies
bun install
```

### Development Commands

```bash
# Run in TUI mode (configuration)
bun run src/ccmirrorstaline.ts

# Build for distribution
bun run build
```

### 📁 Project Structure

```
ccmirrorstaline/
├── src/
│   ├── ccmirrorstaline.ts         # Main entry point
│   ├── tui/                    # React/Ink configuration UI
│   │   ├── App.tsx             # Root TUI component
│   │   ├── index.tsx           # TUI entry point
│   │   └── components/         # UI components
│   │       ├── MainMenu.tsx
│   │       ├── LineSelector.tsx
│   │       ├── ItemsEditor.tsx
│   │       ├── ColorMenu.tsx
│   │       ├── PowerlineSetup.tsx
│   │       └── ...
│   ├── widgets/                # Status line widget implementations
│   │   ├── Model.ts
│   │   ├── GitBranch.ts
│   │   ├── TokensTotal.ts
│   │   ├── OutputStyle.ts
│   │   └── ...
│   ├── utils/                  # Utility functions
│   │   ├── config.ts           # Settings management
│   │   ├── renderer.ts         # Core rendering logic
│   │   ├── powerline.ts        # Powerline font utilities
│   │   ├── colors.ts           # Color definitions
│   │   └── claude-settings.ts  # Claude Code integration
│   └── types/                  # TypeScript type definitions
│       ├── Settings.ts
│       ├── Widget.ts
│       ├── PowerlineConfig.ts
│       └── ...
├── dist/                       # Built files (generated)
├── package.json
├── tsconfig.json
└── README.md
```
## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

[MIT](LICENSE) © Matthew Breedlove

---

## 👤 Author

**Matthew Breedlove**

- GitHub: [@sirmalloc](https://github.com/sirmalloc)

---

## 🔗 Related Projects

- [tweakcc](https://github.com/Piebald-AI/tweakcc) - Customize Claude Code themes, thinking verbs, and more.
- [ccusage](https://github.com/ryoppippi/ccusage) - Track and display Claude Code usage metrics.

---

## 🙏 Acknowledgments

- Built for use with [Claude Code CLI](https://claude.ai/code) by Anthropic
- Powered by [Ink](https://github.com/vadimdemedes/ink) for the terminal UI
- Made with ❤️ for the Claude Code community

---

## 🔗 Related Projects

### 🙏 Built Upon Excellence

- **[ccstatusline](https://github.com/hesreallyhim/ccstatusline)** by [@hesreallyhim](https://github.com/hesreallyhim) - **The complete foundation** for this project. All core functionality, widgets, TUI interface, PowerLine support, git integration, token tracking, and more comes from this excellent project
- **[cc-aicodemirror-statusline-plus](https://github.com/Bozhu12/cc-aicodemirror-statusline-plus)** by [@Bozhu12](https://github.com/Bozhu12) - **Inspiration for AirCodeMirror integration only** - provided the concepts and API patterns for adding AirCodeMirror credits tracking
- **[awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)** - Comprehensive collection of Claude Code tools and resources

### 🤝 Community Ecosystem

If you're interested in Claude Code development tools, check out the broader community:
- [Claude Code Official Documentation](https://claude.ai/code)
- [Claude Code GitHub Discussions](https://github.com/anthropics/claude-code/discussions)

---

## Star History

<a href="https://www.star-history.com/#sirmalloc/ccmirrorstaline&Timeline">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sirmalloc/ccmirrorstaline&type=Timeline&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sirmalloc/ccmirrorstaline&type=Timeline" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sirmalloc/ccmirrorstaline&type=Timeline" />
 </picture>
</a>

<div align="center">

### 🌟 Show Your Support

Give a ⭐ if this project helped you!

[![GitHub stars](https://img.shields.io/github/stars/sirmalloc/ccmirrorstaline?style=social)](https://github.com/sirmalloc/ccmirrorstaline/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/sirmalloc/ccmirrorstaline?style=social)](https://github.com/sirmalloc/ccmirrorstaline/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/sirmalloc/ccmirrorstaline?style=social)](https://github.com/sirmalloc/ccmirrorstaline/watchers)

[![npm version](https://img.shields.io/npm/v/ccmirrorstaline.svg)](https://www.npmjs.com/package/ccmirrorstaline)
[![npm downloads](https://img.shields.io/npm/dm/ccmirrorstaline.svg)](https://www.npmjs.com/package/ccmirrorstaline)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sirmalloc/ccmirrorstaline/blob/main/LICENSE)
[![Made with Bun](https://img.shields.io/badge/Made%20with-Bun-000000.svg?logo=bun)](https://bun.sh)

[![Issues](https://img.shields.io/github/issues/sirmalloc/ccmirrorstaline)](https://github.com/sirmalloc/ccmirrorstaline/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/sirmalloc/ccmirrorstaline)](https://github.com/sirmalloc/ccmirrorstaline/pulls)
[![Contributors](https://img.shields.io/github/contributors/sirmalloc/ccmirrorstaline)](https://github.com/sirmalloc/ccmirrorstaline/graphs/contributors)

### 💬 Connect

[Report Bug](https://github.com/sirmalloc/ccmirrorstaline/issues) · [Request Feature](https://github.com/sirmalloc/ccmirrorstaline/issues) · [Discussions](https://github.com/sirmalloc/ccmirrorstaline/discussions)

</div>
