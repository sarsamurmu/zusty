---
title: Breakpoints
---

# Breakpoints
Zusty has four breakpoints by default. You can even extend it. [Learn more about extending breakpoints](../general/variables#extending-breakpoints).

Breakpoints are
- `small`{.tag}
- `medium`{.tag}
- `until-large`{.tag}
- `large`{.tag}

If a modifier says that it has support for breakpoints. Then the modifier can be applied in this way for any breakpoint only `{comment}(modifier-class)@{comment}(breakpoint-name)`{.string}.

Here's an example
You may know, you can use `zust-hidden`{.class} class to hide any element.
What if you want to hide it only on `small`{.tag} screens?
Simply use class `zust-hidden@small`{.class}.
