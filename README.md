Learn 5 Interesting Things about Signals in #Angular

𝐂𝐎𝐌𝐏𝐔𝐓𝐄𝐃 𝐕𝐀𝐋𝐔𝐄 

The computed value is performance enhanced (𝘭𝘢𝘻𝘺 𝘦𝘷𝘢𝘭𝘶𝘢𝘵𝘦𝘥)

If a consumer wants/reads a computed value multiple times 
- the computation will be done only once 
- the rest of the calls will use a cached value.
- Re-computation is done only when the base signal changes 
  AND the computed value is requested again

.

𝐏𝐔𝐒𝐇/𝐏𝐎𝐋𝐋

Signal DOM updates are performed only when necessary,  following a 𝘗𝘜𝘚𝘏/𝘗𝘖𝘓𝘓 “algorithm”. 

Meaning that the 𝘋𝘖𝘔 𝘸𝘪𝘭𝘭 𝘶𝘱𝘥𝘢𝘵𝘦 𝘶𝘴𝘪𝘯𝘨 𝘵𝘩𝘦 𝘭𝘢𝘵𝘦𝘴𝘵 𝘷𝘢𝘭𝘶𝘦 𝘰𝘧 𝘵𝘩𝘦 𝘴𝘪𝘨𝘯𝘢𝘭. 

If a signal is set 5 times within a method, the DOM updates only with the last value.

.

𝐀𝐋𝐋𝐎𝐖 𝐒𝐈𝐆𝐍𝐀𝐋 𝐖𝐑𝐈𝐓𝐄𝐒 

Updating signals within an effect function is forbidden by default because:
- an effect runs after updating a signal.
- that could lead to a circular dependency.

However there are cases when update is needed, to overwrite the default config use:
{ 𝘢𝘭𝘭𝘰𝘸𝘚𝘪𝘨𝘯𝘢𝘭𝘞𝘳𝘪𝘵𝘦𝘴: 𝘵𝘳𝘶𝘦 } in the effect config.

.

𝐒𝐈𝐆𝐍𝐀𝐋𝐒 & 𝐈𝐌𝐌𝐔𝐓𝐀𝐁𝐈𝐋𝐈𝐓𝐘

Resetting the same old value to a signal 𝘸𝘰𝘯’𝘵 𝘵𝘳𝘪𝘨𝘨𝘦𝘳 𝘢 𝘤𝘩𝘢𝘯𝘨𝘦 (in computed signals, effect function, or DOM updates).

Signals know that value was set before and therefore use it further.

.

𝐔𝐍𝐓𝐑𝐀𝐂𝐊𝐄𝐃

Signals by default are tracked for changes (when used inside a reactive context like 𝘦𝘧𝘧𝘦𝘤𝘵 or 𝘵𝘦𝘮𝘱𝘭𝘢𝘵𝘦). 

If you want to perform operations with signals that are not tracked and therefore not trigger any (side) effects, use the 𝘶𝘯𝘵𝘳𝘢𝘤𝘬𝘦𝘥() function.

𝘶𝘯𝘵𝘳𝘢𝘤𝘬𝘦𝘥() makes sure signals are consumed without updating the reactive graph.

__________________

Play with these examples by replacing the component in the template of app.component.
