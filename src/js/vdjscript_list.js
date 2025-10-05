const vdjscript_list =
{
    "VdjBuild": "8673",
    "Items":
    {
        "flow":
        {
            "down":
            {
                "description": "execute different actions depending if the key is pressed or released.",
                "examples": "down ? action1 : action2"
            },
            "isrepeat":
            {
                "description": "execute different actions depending if the key is being repeated or if it's the first message (on Windows, keyboard shortcuts are usually auto-repeated while held down))",
                "examples": "isrepeat ? action1 : action2 | isrepeat ? nothing : goto_cue"
            },
            "nothing":
            {
                "description": "Do nothing."
            },
            "up":
            {
                "description": "execute different actions depending if the key is released or pressed.",
                "examples": "up ? action1 : action2"
            }
        },
        "param":
        {
            "blink":
            {
                "description": "turn on and off the LED, once per second.You can specify the speed. Speed can also be specified in number of beats. The time blinking can also be specified.",
                "examples": "blink 1000ms | blink 1bt | blink 1bt 25%"
            },
            "color":
            {
                "description": "returns a RGB color. \"color 75% 'red'\" returns a dimmed red, 'color 0.66' returns a gray",
                "examples": "color red | color \"#C08040\" | color 0.8 0.5 0.25 | color 75% red | color 0.66"
            },
            "color_mix":
            {
                "description": "Mix two colors based on an action in the third parameter",
                "examples": "color_mix white red `get_limiter`"
            },
            "constant":
            {
                "description": "Return the specified value. 'get constant 75%' always returns 75%",
                "alias": "get_constant",
                "examples": "get constant 75%"
            },
            "dim":
            {
                "description": "equivalent of \"constant 0.1\""
            },
            "fadeout":
            {
                "description": "'loop & fadeout 10000ms 3000ms' will return 100 % when loop is on, and fade out to 0% after 10 seconds in 3 seconds when loop turns off Alternatively, the action can be entered as the third parameter in backticks: 'fadeout 10000ms 3000ms `loop`'",
                "examples": "loop & fadeout 10000ms 3000ms | fadeout 10000ms 3000ms `loop`"
            },
            "false":
            {
                "description": "returns false",
                "alias": "no | off",
                "examples": "effect_active false"
            },
            "param_1_x":
            {
                "description": "invert the value of the calling slider/encoder/button (calculate 1/x)",
                "examples": "param_1_x & effect_slider"
            },
            "param_add":
            {
                "description": "add the given value to the value of the calling slider/ encoder / button add the value of the first parameter with the value of the second parameter.Both parameters can be actions instead of values: 'param_add `get_var a` `get_var b`'",
                "examples": "param_add `get_var a` `get_var b`"
            },
            "param_bigger":
            {
                "description": "check if the value of the calling slider/encoder/button is bigger than something: 'param_bigger 0 ? sampler loop 200% : sampler loop 50%' compare value of the first parameter with the value of the second parameter. Both parameters can be actions instead of values: 'param_bigger pitch pitch_slider'",
                "alias": "param_greater",
                "examples": "param_bigger 0 ? action1 : action2 | param_bigger 0 ? sampler_loop 200% : sampler_loop 50% | param_bigger pitch pitch_slider"
            },
            "param_cast":
            {
                "description": "cast the value of the previous query action into a new type: 'pitch_range & param_cast \"percentage\"'. Valid types are 'integer', 'float', 'percentage', 'ms', 'boolean', 'beats', 'text'. casting to text can also optionally limit the number of characters: 'get_browsed_song \"artist\" & param_cast \"text\" 5' to format a number as text with a specific number of digits: 'get_bpm & param_cast \"000\"' param_cast 'int_trunc' : provides the integer part of a number without rounding to the nearest integer param_cast 'frac' : provides the decimal part of a number. param_cast 'relative' and param_cast 'absolute' : change the parameter to be a relative or absolute value",
                "examples": "pitch_range & param_cast \"percentage\" | get_browsed_song \"artist\" & param_cast \"text\" 5 | get_bpm & param_cast \"000\""
            },
            "param_contains":
            {
                "description": "Check if the value of the calling action contains the string in the parameter."
            },
            "param_delta":
            {
                "description": "transform an absolute value into relative (example: 0.5, 0.7, 0.8 will become +0.0, +0.2, +0.1)"
            },
            "param_equal":
            {
                "description": "Check if the value of the calling slider/encoder/button is equal to something To compare a string with the result of an action, use param_equal `action param` \"string\". For example: param_equal `get_browsed_song 'type'` \"audio\"",
                "examples": "param_equal 0.5 ? action1 : action2 | param_equal `action param` \"string\" | param_equal `get_browsed_song 'type'` \"audio\""
            },
            "param_invert":
            {
                "description": "invert the value of the calling slider/encoder/button (1-x)",
                "examples": "param_invert & pitch_slider"
            },
            "param_lowercase":
            {
                "description": "change the text result of the previous element in the script into lowercase"
            },
            "param_make_discrete":
            {
                "description": "useful for smooth endless encoders, to make them discrete.",
                "examples": "param_make_discrete 0.1 & param_bigger 0 ? loop_move +100% : param_smaller 0 ? loop_move - 100%"
            },
            "param_mod":
            {
                "description": "wrap the value of the calling slider/encoder if more than the given value",
                "examples": "param_mod & effect_slider"
            },
            "param_multiply":
            {
                "description": "multiply the value of the calling slider/encoder/button by the given value. param_multiply value & action. The parameter can also be an action 'cue_pos 0 & param_multiply \"get_time total 1000\"'",
                "examples": "param_multiply 300% & effect_slider | cue_pos 0 & param_multiply \"get_time total 1000\""
            },
            "param_pingpong":
            {
                "description": "transform the value of the calling slider/encoder from a linear scale to a forth-and-back scale",
                "examples": "param_pingpong & effect_slider"
            },
            "param_pow":
            {
                "description": "param_pow y : computes the power of the caller to the power of y. Can be 0.5 for calculating square root.",
                "examples": "param_pow 2 & effect_slider | param_pow 0.5 & effect_slider"
            },
            "param_smaller":
            {
                "description": "check if the value of the calling slider/encoder/button is smaller than something: 'param_smaller 0 ? sampler loop 200% : sampler loop 50%'",
                "examples": "param_smaller 0 ? action1 : action2 | param_smaller 0 ? sampler loop 200% : sampler loop 50%"
            },
            "param_ucfirst":
            {
                "description": "change the first letter into upper case and the rest in lower case"
            },
            "param_uppercase":
            {
                "description": "change the text result of the previous element in the script into uppercase"
            },
            "pulse":
            {
                "description": "return true when the previous action turns to true only for the duration specified.",
                "examples": "is_using 'equalizer' & pulse 2000ms"
            },
            "true":
            {
                "description": "returns true",
                "alias": "on | yes",
                "examples": "effect_active true"
            }
        },
        "repeat":
        {
            "doubleclick":
            {
                "description": "execute different actions depending if the key is pressed twice in a short period of time or not: 'doubleclick ? automix : mix_now'. you can specify the time between two presses ('doubleclick 1000ms'), by default it's 300ms."
            },
            "holding":
            {
                "description": "execute different actions depending if the key is pressed for a long time or not: 'holding ? automix : mix_now'. you can specify the time ('holding 1000ms'), by default it's 500ms."
            },
            "repeat":
            {
                "description": "repeat the actions every x ms as long as the key is pressed (default is 500ms if no speed is specified. Second parameter can specify a delay before repeating the first time)",
                "examples": "repeat 1000ms & browser_scroll +1"
            },
            "repeat_start":
            {
                "description": "Repeat an action at a specified interval (first parameter is an identifier name, second parameter is the interval and the third optional parameter can specify a number of times to repeat). The first action will be performed after an interval has passed. The interval can be specified in milliseconds, beats, or can be an action of itself.",
                "examples": "repeat_start 'myrepeatname' 1000ms 5 & browser_scroll +1 | 'repeat_start 'myrepeatname' 1bt' | 'repeat_start 'myrepeatname `get_var a`'"
            },
            "repeat_start_instant":
            {
                "description": "Repeat an action at a specified interval (first parameter is an identifier name, second parameter is the interval and the third optional parameter can specify a number of times to repeat). The first action will be performed immediately.",
                "examples": "repeat_start_instant 'myrepeatname' 1000ms 5 & browser_scroll +1"
            },
            "repeat_stop":
            {
                "description": "stop a previous repeat_start or repeat_start_instant action.",
                "examples": "repeat_stop 'myrepeatname'"
            },
            "wait":
            {
                "description": "wait for the specified amount of time between two script actions.",
                "examples": "wait 1bt & pause | wait 500ms & play"
            }
        },
        "skin":
        {
            "custom_button":
            {
                "description": "a custom button is a button with initially no action, but the action can be written in VDJScript by the user"
            },
            "custom_button_edit":
            {
                "description": "open the custom button editor to set or change the action"
            },
            "custom_button_name":
            {
                "description": "return (or set) the name for this custom button"
            },
            "get_skin_color":
            {
                "description": "TODO"
            },
            "has_cover":
            {
                "description": "TODO"
            },
            "has_custom_button":
            {
                "description": "returns true if this custom button has an action assigned to it"
            },
            "has_logo":
            {
                "description": "TODO"
            },
            "is_using":
            {
                "description": "check if a particular feature is being used ('filter', 'equalizer', 'loop', 'cue', 'sample', 'pads', 'effect', 'load') "
            },
            "load_skin":
            {
                "description": "load a new skin. Use syntax \"load_skin ':newvariation'\" to load a different variation inside the same skin file.",
                "samples": "load_skin 'myskin'"
            },
            "lock_panel":
            {
                "description": "NOTE: despite the name, this action acts on <split> elements, not <panel>",
                "alias": "lock_pannel"
            },
            "multibutton":
            {
                "description": "Click on the named multibutton",
                "examples": "multibutton 'my_button'"
            },
            "multibutton_select":
            {
                "description": "Open the selection menu for the named multibutton. If a second text parameter is provided after the name, use it as the new action to load in the multibutton: 'multibutton_select \"my_button\" \"goto_cue 2 & play\"'"
            },
            "rack":
            {
                "description": "Open/close a unit in specified rack.",
                "examples": "rack 'rack1' 'unit1'"
            },
            "rack_prioritize":
            {
                "description": "Prioritizes a unit of the specified rack. When more configurations with same size are available, the prioritized unit will get most space. Example: \"rack_prioritize 'rack1' 'unit1'\""
            },
            "rack_solo":
            {
                "description": "Open/close a unit in full size on the specified rack. Closing the unit will re-open the previous configuration.",
                "examples": "rack_solo 'rack1' 'unit1'"
            },
            "show_splitpanel":
            {
                "description": "Show/hide the specified split panel",
                "examples": "show_splitpanel 'sidelist' | show_splitpanel 'sideview' on | show_splitpanel 'sidelist' 50 %"
            },
            "skin_empty_buttons":
            {
                "description": "TODO"
            },
            "skin_height":
            {
                "description": "TODO"
            },
            "skin_panel":
            {
                "description": "show or hide a panel on the skin.",
                "alias": "skin_pannel",
                "examples": "skin_panel 'my_panel' on"
            },
            "skin_panelgroup":
            {
                "description": "change which panel from a skin panel group is shown. syntax \"skin_panelgroup 'groupname' 'panelname'\" or \"skin_panelgroup 'groupname' +1\" or \"skin_panelgroup 'groupname' 0.75\"",
                "alias": "skin_pannelgroup"
            },
            "skin_panelgroup_available":
            {
                "description": "set a panel to be available or not. panels that are not available will not show up in group cycles"
            },
            "skin_starter_tip":
            {
                "description": "TODO"
            },
            "skin_width":
            {
                "description": "TODO"
            },
            "switch_skin_variation":
            {
                "description": "TODO"
            },
            "zoom":
            {
                "description": "zoom horizontal rhythm and scratch visual",
                "alias": "zoom_scratch"
            },
            "zoom_vertical":
            {
                "description": "zoom vertical scratch wave"
            }
        },
        "system":
        {
            "debug":
            {
                "description": "display the value of the parameter (you can use this to see what values controllers are sending, for example)"
            },
            "get_battery":
            {
                "description": "returns how much battery is left on your laptop"
            },
            "get_clock":
            {
                "description": "get the current time (use 'get_clock 12' to display AM/PM)",
                "examples": "get_clock | get_clock 12"
            },
            "get_cpu":
            {
                "description": "get the cpu activity"
            },
            "get_date":
            {
                "description": "get the current date (use 'get_date \"format\"' to get the date in a specific format. format can include %Y, %m, %d for year, month and day, %A for weekday)"
            },
            "get_peak_audio":
            {
                "description": "TODO"
            },
            "getfood":
            {
                "description": "because no DJ should work on an empty stomach"
            },
            "handshake":
            {
                "description": "Perform an encrypted handshake to ensure that this plugin is currently being called by a real VirtualDJ environment. Call this passing any string, decrypt the result using VirtualDJ's handshake public key, and check that it matches what you passed. See the developer documentation on our website for example code."
            },
            "has_battery":
            {
                "description": "returns true if your computer has batteries"
            },
            "has_notch":
            {
                "description": "return true when the display has a notch at the top center and the skin is maximized, false otherwise"
            },
            "has_system_volume":
            {
                "description": "Returns true when the system volume can be modified"
            },
            "is_battery":
            {
                "description": "returns true if your computer is running on batteries"
            },
            "is_mac":
            {
                "description": "return true if the computer is a MAC, false if it's a PC",
                "alias": "is_macos"
            },
            "is_pc":
            {
                "description": "return true if the computer is a PC, false if it's a MAC (example: <panel visible=\"is_pc\" />)",
                "alias": "is_windows"
            },
            "open_help":
            {
                "description": "open the user guide"
            },
            "show_keyboard":
            {
                "description": "display an onscreen keyboard"
            },
            "system":
            {
                "description": "TODO"
            },
            "system_volume":
            {
                "description": "Change the system volume of the active sound card when available (use has_system_volume to check)"
            }
        },
        "variables":
        {
            "controllervar":
            {
                "description": "variable that is unique to each controller. You can add # in front of the variable name to make it both deck and controller-dependent"
            },
            "cycle":
            {
                "description": "syntax: 'cycle \"my_var\" 42'. increment my_var, and goes back to 0 when it reaches 42. 'cycle \"my_var\" -42' decrements my_var, and goes to 41 after it reached 0.",
                "examples": "cycle \"my_var\" 42 | cycle \"my_var\" -42"
            },
            "get_var":
            {
                "description": "get the value of the specified variable",
                examples: "get_var \"my_var\""
            },
            "set":
            {
                "description": "set 'varname' 5 sets variable varname to the value 5 set 'varname' 'var2' sets variable varname to the value of variable var2 set 'varname' `play` sets variable varname to the value of the action play",
                "examples": "set 'varname' 5 | set 'varname' 'var2' | set 'varname' `play`"
            },
            "set_var":
            {
                "description": "set the value of the specified variable",
                examples: "set_var \"my_var\" 5"

            },
            "set_var_dialog":
            {
                "description": "set_var_dialog 'varname' opens a dialog to enter the value of varname set_var_dialog 'varname' 'information text' opens a dialog to enter the value of varname, and shows the second parameter as informational text"
            },
            "toggle":
            {
                "description": "syntax: 'toggle \"my_var\"'. toggle my_var between true and false.",
                "examples": "toggle \"my_var\""
            },
            "var":
            {
                "description": "var \"my_var\" ? my_action1 : my_action2'. execute my_action1 if my_var is true (non zero), execute my_action2 otherwise. You can also compare var with a specific value: 'var \"my_var\" 1 ? my_action1 : my_action2' execute my_action1 is my_var is 1, or my_action2 otherwise",
                "examples": "var \"my_var\" ? my_action1 : my_action2 | var \"my_var\" 1 ? my_action1 : my_action2"
            },
            "var_equal":
            {
                "description": "syntax: 'var_equal \"my_var\" 42 ? my_action1 : my_action2'. execute my_action1 if my_var equals 42, execute my_action2 otherwise. syntax: 'var_equal \"this_var\" \"that_var\" ? action1 : action2' execute action1 if this_var equals that_var, execute action2 otherwise",
                "examples": "var_equal \"my_var\" 42 ? action1 : action2 | var_equal \"my_var1\" \"my_var2\" ? action1 : action2"
            },
            "var_greater":
            {
                "description": "syntax: 'var_greater \"my_var\" 42 ? my_action1 : my_action2'. execute my_action1 if my_var is greater than 42, execute my_action2 otherwise.",
                "examples": "var_greater \"my_var\" 42 ? action1 : action2"
            },
            "var_list":
            {
                "description": "show a window with a list of your current variables and their values"
            },
            "var_not_equal":
            {
                "description": "syntax: 'var_not_equal \"my_var\" 42 ? my_action1 : my_action2'. execute my_action1 if my_var doesn't equal 42, execute my_action2 otherwise.",
                "examples": "var_not_equal \"my_var\" 42 ? action1 : action2"
            },
            "var_smaller":
            {
                "description": "syntax: 'var_smaller \"my_var\" 42 ? my_action1 : my_action2'. execute my_action1 if my_var is smaller than 42, execute my_action2 otherwise.",
                "examples": "var_smaller \"my_var\" 42 ? action1 : action2"
            }
        },
        "window":
        {
            "close":
            {
                "description": "close the application."
            },
            "maximize":
            {
                "description": "maximize the application to maximized, full screen, or back to windowed. A specific mode can be selected using \"maximize 'windowed'\", \"maximize 'maximized'\" or \"maximize 'fullscreen'\""
            },
            "minimize":
            {
                "description": "minimize the application in the taskbar.",
            },
            "open_stem_creator":
            {
                "description": "Open the Stems creator editor",
            },
            "show_window":
            {
                "description": "on skin with multiple windows, show or hide the specified window",
            }
        },
        "audio":
        {
            "beat_juggle":
            {
                "description": "Alternatively jumps one beat forward and backward 'beat_juggle 0.5' will jump 1/2 beat forward or backward",
                "examples": "beat_juggle | beat_juggle 0.5"
            },
            "beatjump":
            {
                "description": "Jump a certain number of beats as set by beatjump_select 'beatjump +1' to jump forward, or 'beatjump -1' to jump backwards",
                "examples": "beatjump +1 | beatjump -1"
            },
            "beatjump_pad":
            {
                "description": "execute 'goto +x' where x depends on the pad number and the beatjump_page"
            },
            "beatjump_page":
            {
                "description": "change the offset of the jumps in beatjump_pad actions"
            },
            "beatjump_select":
            {
                "description": "Select the number of beats the beatjump action will jump 'beatjump_select 4' to set beatjump to 4 beats 'beatjump_select +1' to set the next higher beat size 'beatjump_select 50%' to halve the current beat size 'beatjump_select 200%' to double the current beat size",
                "examples": "beatjump_select 4 | beatjump_select +1 | beatjump_select 50% | beatjump_select 200%"
            },
            "clone_deck":
            {
                "description": "clone the deck (load the same song on the other deck, and play it from the same position, ready for beat-juggling)."
            },
            "clone_from_deck":
            {
                "description": "clone from the other deck (load the song from the other deck, and play it from the same position, ready for beat-juggling)."
            },
            "dualdeckmode":
            {
                "description": "toggle dual deck mode. when enabled dualdeckmode_decks will apply to both decks 1/3 or 2/4"
            },
            "dualdeckmode_decks":
            {
                "description": "TODO"
            },
            "dump":
            {
                "description": "reverse the playback direction while dump is active, then when deactivated, start again forward from where the song should have been if it had been playing forward during the dump. when quantize_all is active, dump will be quantized to match the beats. This can also be forced by using 'dump quantized' or 'dump notquantized' to dump only while the key is pressed, use 'dump while_pressed'"
            },
            "goto":
            {
                "description": "change the position in the song. 'goto +10ms' jumps 10ms forward. 'goto -4' jumps 4 beats backward. 'goto 20%' jumps to 20% of the song's length.",
                "examples": "goto +10ms | goto -4 | goto 20%"
            },
            "goto_bar":
            {
                "description": "put the song on its nth beat after the downbeat without loosing sync",
                "examples": "goto_bar 4"
            },
            "goto_first_beat":
            {
                "description": "automatically goes to the first beat in the song."
            },
            "goto_start":
            {
                "description": "go to the start of the song."
            },
            "mixermode":
            {
                "description": "Return true if internal mixer used (master output available), false if external mixer used. Parameter can also be explicit: mixermode \"internal\" or mixermode \"external\""
            },
            "move_deck":
            {
                "description": "load the song from the called deck into the deck specified by the parameter and unloads the song from the calling deck"
            },
            "reverse":
            {
                "description": "play the song backward"
            },
            "seek":
            {
                "description": "move into the song while the button is pressed. 'seek +2' moves beat by beat, skipping 2 beats every 10ms. 'seek +420ms' moves from 420ms every 10ms. using skip with a beat number keep the song playing correctly while moving inside."
            },
            "song_pos":
            {
                "description": "position in the song. (the difference between song_pos and goto is that song_pos can be used as a slider)."
            },
            "songpos_remain":
            {
                "description": "get the remaining time in %. if used with a parameter (in % or ms), returns true if the time left is less or equal than the value: 'songpos_remain 500ms ? blink'."
            },
            "songpos_warning":
            {
                "description": "returns true if the song is in its last 30s (actual time can be adjusted in options)"
            },
            "stems_split":
            {
                "description": "'stems_split' will duplicate deck 1 to deck 3 or deck 2 to 4, with the vocals playing on the first deck and the instruments on the other deck 'stems_split vocal target' will duplicate the opposite deck to the deck stems_split was called from"
            },
            "stems_split_unlink":
            {
                "description": "After using stems_split, you can use stems_split_unlink to have the decks behave independently, allowing to scratch the vocals without affecting the instrumental for example"
            },
            "swap_decks":
            {
                "description": "swap deck 1 and deck 2"
            }
        },
        "audio_controls":
        {
            "auto_sync_options":
            {
                "description": "show a context menu to control the various auto-sync options"
            },
            "blink_play":
            {
                "description": "blinking fast when less than 10 seconds remaining, blinking slow when less than 30 seconds remaining, off otherwise 'blink_play on' is similar, but is on when the song is paused, and only off if no song is loaded or the loaded song has an error"
            },
            "deck_options":
            {
                "description": "show a context menu to select the behavior of the play and cue buttons, the various smart modes, and pitch options"
            },
            "emergency_play":
            {
                "description": "play something"
            },
            "pause":
            {
                "description": "pause the deck."
            },
            "pause_stop":
            {
                "description": "if playing, pause the deck. if stopped, rewind to beginning of the song, then cycle through all cue points each time pressed."
            },
            "play":
            {
                "description": "start the deck."
            },
            "play_button":
            {
                "description": "depending on the play_mode, act like play_stutter (Numark way) or play_pause (Pioneer way).",
                "alias": "play_3button"
            },
            "play_options":
            {
                "description": "show a context menu to select the behavior of the play and cue buttons, and the various smart modes"
            },
            "play_pause":
            {
                "description": "if paused, start the deck. if playing, pause the deck."
            },
            "play_stutter":
            {
                "description": "if paused, start the deck. if playing, restart from last stutter point."
            },
            "stop":
            {
                "description": "stop to the last cue point, then on second press to the beginning of the song, then cycle through the cue points."
            },
            "stop_button":
            {
                "description": "depending on the play_mode, act like pause_stop (Numark way) or stop (Pioneer way).",
                "alias": "stop_3button"
            }
        },
        "audio_inputs":
        {
            "aux_volume":
            {
                "description": "TODO"
            },
            "djc_mic":
            {
                "description": "TODO"
            },
            "linein":
            {
                "description": "Activate or deactivate the linein on this deck. You can also specify a linein number to assign another linein: \"deck 1 linein 2 on\" Or you can assign the microphone or aux input: \"deck 3 linein 'mic' on\" or \"deck 3 linein 'aux' on\" If you don't want the line in to become the master deck automatically, you can use \"deck 3 linein 'trs'\""
            },
            "linein_rec":
            {
                "description": "record the linein input on this deck."
            },
            "mic":
            {
                "description": "activate or deactivate the microphone input",
                "alias": "microphone"
            },
            "mic_eq_high":
            {
                "description": "TODO"
            },
            "mic_eq_low":
            {
                "description": "TODO"
            },
            "mic_eq_mid":
            {
                "description": "TODO"
            },
            "mic_rec":
            {
                "description": "record the microphone input on this deck"
            },
            "mic_talkover":
            {
                "description": "Lower the volume of all decks while active and activates microphone Use 'mic_talkover while_pressed' to only activate mic as long as button is held Use 'mic_talkover 20% 1000ms' to lower deck volumes to 20% and fade to the volume in 1 second. (Defaults are 30% and 400ms)",
                "examples": "mic_talkover | mic_talkover while_pressed | mic_talkover 20% 1000ms"
            }
        },
        "audio_scratch":
        {
            "get_scratch_direction":
            {
                "description": "TODO"
            },
            "get_slip_active":
            {
                "description": "TODO"
            },
            "get_slip_time":
            {
                "description": "Get the time where the song will be when slip mode is de-activated in milliseconds Alternatively, use get_slip_time \"min\", get_slip_time \"sec\" and get_slip_time \"msec\""
            },
            "hold":
            {
                "description": "'hold on' or 'hold off'(or 'hold toggle') to stop the disc for scratching, or release it.",
                "alias": "scratch_hold"
            },
            "jogwheel":
            {
                "description": "used for a jogwheel without touch sensitivity. 'jogwheel +1.0' means a full rotation of the wheel.",
                "alias": "jog | jog_wheel",
                "examples": "jogwheel"
            },
            "motorwheel":
            {
                "description": "used for a motorized jogwheel. Each time the jogwheel moves, send 'motorwheel \"move\" +1.0' followed by 'motorwheel \"timestamp\" 1000.0'. 'move +1.0' means a full platter rotation. 'timestamp 1.0' means 1ms since last message. You should query 'motorwheel' and turn the motor on when it returns true and off when false.",
                "examples": "motorwheel"
            },
            "nudge":
            {
                "description": "'nudge +120ms' to nudge the song 120ms forward (using mastertempo if it's activated).",
                "examples": "nudge +120ms | nudge -120ms | nudge +1 | nudge +1.0 | nudge +100%"
            },
            "scratch":
            {
                "description": "'scratch +120ms' to scratch 120ms forward.",
                "examples": "scratch +120ms | scratch -120ms"
            },
            "scratch_dna":
            {
                "description": "execute a scratch defined by its DNA signature (see scratch_dna_editor for information about DNA signatures)"
            },
            "scratch_dna_editor":
            {
                "description": "open a visual editor to compose scratch DNA signatures"
            },
            "scratch_dna_option":
            {
                "description": "set some options about the Scratch DNA behavior. options are \"drymix\" and \"quantized\""
            },
            "slip":
            {
                "description": "activate or deactivate a global slip mode, that will save the position on \"slip on\" and resume where it should have been if untouched on \"slip off\", letting you do any scratch/loop/effect/etc in between"
            },
            "slip_mode":
            {
                "description": "While in slip mode, during loops hotcues or scratch, the play cursor will keep moving unaffected, and will resume from there after release"
            },
            "speedwheel":
            {
                "description": "used for a precision touchwheel that reports both position and speed. 'speedwheel +1.0 1.5' means a full rotation of the wheel, at 150% speed.",
                "examples": "speedwheel"
            },
            "touchwheel":
            {
                "description": "used for a jogwheel with touch sensitivity. 'touchwheel +1.0' means a full rotation of the wheel.",
                "alias": "scratch_wheel | scratchwheel",
                "examples": "touchwheel"
            },
            "touchwheel_touch":
            {
                "description": "use when the touchwheel is touched, to hold the song and start to scratch.",
                "alias": "scratch_wheel_touch | scratchwheel_touch | speedwheel_touch"
            },
            "vinyl_mode":
            {
                "description": "Set the jogwheel to Vinyl mode (with scratch), or to CD mode (with pitchbend)"
            },
            "wheel_mode":
            {
                "description": "change the mode of the jogwheel between: \"jog\", \"search\", \"loop_move\", \"loop_out\", \"loop_in\", \"browser\", or use +1 and -1 to cycle through all modes. You can select from a subset using a syntax like 'wheel_mode \"loop_move, loop_in, loop_out\" +1'."
            }
        },
        "audio_volumes":
        {
            "auto_crossfade":
            {
                "description": "Automatically crossfade to the other deck. You can specify the duration of the crossfade in ms: 'auto_crossfade 2000ms' Assigned to a slider, or specifying a specific position, it will move the crossfader slowly to that position: 'auto_crossfade 50%' or 'auto_crossfade 1000ms 50%'",
                "alias": "auto_crossfader"
            },
            "booth_volume":
            {
                "description": "set booth volume"
            },
            "colorfx_prefader":
            {
                "description": "color fx are prefader (required for some controllers)"
            },
            "crossfader":
            {
                "description": "move the crossfader. crossfader 0% will only let the left deck out, crossfader 100% will only let the right deck out.",
                "alias": "crossfader_slider",
                "examples": "crossfader 0% | crossfader 100% | crossfader 50% | crossfader 0.5"
            },
            "crossfader_curve":
            {
                "description": "select the curve of the crossfader. enter a value to adjust the slope from a X curve (0%) to a inverted-U curve (100%). you can also specify common curves by name (\"smooth\", \"full\", \"scratch\", \"cut\"). or you can draw your own curve, using a syntax like 'crossfader_curve \"0 = [1, 0] / 0.5=[1, 1]/1=[0,1]\"'.",
                "examples": "crossfader_curve \"smooth\" | crossfader_curve \"0=[1,0]/0.5=[1,1]/1=[0,1]\""
            },
            "crossfader_disable":
            {
                "description": "disable the crossfader"
            },
            "crossfader_hamster":
            {
                "description": "invert the crossfader."
            },
            "fake_eq":
            {
                "description": "tell VirtualDJ not to apply the equalizer to the sound output"
            },
            "fake_filter":
            {
                "description": "tell VirtualDJ not to apply filter to sound output"
            },
            "fake_gain":
            {
                "description": "tell VirtualDJ not to apply gain to the sound output"
            },
            "fake_hp":
            {
                "description": "tell VirtualDJ not to apply headphone volume to headphone sound output"
            },
            "fake_hpmix":
            {
                "description": "tell VirtualDJ not to apply headphone mix to headphone sound output"
            },
            "fake_master":
            {
                "description": "tell VirtualDJ not to apply master volume to master sound output"
            },
            "fake_mixer":
            {
                "description": "tell VirtualDJ not to apply the volumes to the sound output"
            },
            "fake_pfl":
            {
                "description": "tell VirtualDJ to disable pfl switch from skin, when pfl can only be controlled from controller or mixer"
            },
            "gain":
            {
                "description": "set the gain of a deck",
                "alias": "gain_slider | power_gain"
            },
            "gain_label":
            {
                "description": "get the text to display under the gain knob"
            },
            "gain_relative":
            {
                "description": "change the gain, relative to the software gain position"
            },
            "get_crossfader_result":
            {
                "description": "get the actual volume balance between deck 1 and 2, based on crossfader, levels, and play (use get_crossfader_result \"full\" to show levels even for paused decks)"
            },
            "get_level":
            {
                "description": "Get level of signal before master volume. If no deck is specified will get master level Use \"get_level 'mic'\" for microphone level, or \"get_level 'sampler'\" for sampler level Use \"get_level 'vocal'\" for vocal vu meter, other stem names also supported"
            },
            "get_level_left":
            {
                "description": "Get level of left channel before master volume. If no deck is specified will get master level."
            },
            "get_level_left_peak":
            {
                "description": "Get peak level of left channel before master volume. If no deck is specified will get master peak level."
            },
            "get_level_log":
            {
                "description": "Similar to get_level, but returns level on logarithmic scale where -127dB=0.0 and 0dB=1.0"
            },
            "get_level_peak":
            {
                "description": "Get peak level of signal before master volume. If no deck is specified will get master peak level."
            },
            "get_level_right":
            {
                "description": "Get level of right channel before master volume. If no deck is specified will get master level."
            },
            "get_level_right_peak":
            {
                "description": "Get peak level of left channel before master volume. If no deck is specified will get master peak level."
            },
            "get_limiter":
            {
                "description": "return true if the limiter is compressing because the signal was saturated. Use 'deck 1 get limiter' to get the limiter on a deck in external mixer mode, or 'get_limiter' (or 'get_limiter \"master\") to get the limiter on the master for internal mixing mode (also can use 'get_limiter \"headphones\"' and 'get_limiter \"booth\"')"
            },
            "get_vu_meter":
            {
                "description": "Get level of signal after master volume. If no deck is specified will get master level. Use \"get_vu_meter 'mic'\" for microphone level or \"get_vu_meter 'sampler'\" for sampler level Use \"get_level 'vocal'\" for vocal vu meter, other stem names also supported"
            },
            "get_vu_meter_left":
            {
                "description": "Get level of left channel after master volume. If no deck is specified will get master level."
            },
            "get_vu_meter_left_peak":
            {
                "description": "Get peak level of left channel after master volume. If no deck is specified will get master peak level."
            },
            "get_vu_meter_peak":
            {
                "description": "Get peak level of signal after master volume. If no deck is specified will get master peak level."
            },
            "get_vu_meter_right":
            {
                "description": "Get level of right channel after master volume. If no deck is specified will get master level."
            },
            "get_vu_meter_right_peak":
            {
                "description": "Get peak level of right channel after master volume. If no deck is specified will get master peak level."
            },
            "headphone_crossfader":
            {
                "description": "change the PFL fader (0% is only the left deck, 100% is only the right deck)."
            },
            "headphone_gain":
            {
                "description": "change the gain of the PFL output (from -30dB to +30dB)"
            },
            "headphone_mix":
            {
                "description": "change the mix of the PFL (0% is only the cued deck, 100% is the master output)."
            },
            "headphone_volume":
            {
                "description": "set cue volume"
            },
            "is_audible":
            {
                "description": "active if the deck is playing and volume is up (on-air)"
            },
            "level":
            {
                "description": "set the volume of the deck",
                "alias": "level_slider | volume | volume_slider"
            },
            "levelfader_curve":
            {
                "description": "select the curve of the level faders. 0% is a linear curve, 50% (default) is a quadratic curve, 100% is a cubic curve",
                "alias": "fader_curve"
            },
            "master_balance":
            {
                "description": "change the left/right balance on the master output."
            },
            "master_volume":
            {
                "description": "set master volume"
            },
            "mic2_volume":
            {
                "description": "Set the volume of the second microphone"
            },
            "mic_volume":
            {
                "description": "Set the volume of the microphone"
            },
            "mono_mix":
            {
                "description": "Mix left and right channels together for all outputs"
            },
            "mute":
            {
                "description": "Mute a specific deck"
            },
            "set_gain":
            {
                "description": "set the gain in order to bring the song to the specified dBA (with 0dBA being the maximum level outputable by the soundcard without compression): 'set_gain 0'"
            }
        },
        "automix":
        {
            "automix":
            {
                "description": "Start or stop automatic playlist mixing"
            },
            "automix_add_next":
            {
                "description": "Add the songs selected in the browser to the automix playlist right after the song currently playing If a song in the automix list is selected and automix is active, move it after the currently playing song"
            },
            "automix_dualdeck":
            {
                "description": "Enable or disable automix using both decks"
            },
            "automix_editor":
            {
                "description": "Open the automix editor, and fine-tune the automix transitions for every songs in your playlist"
            },
            "automix_editor_movetrack":
            {
                "description": "When the automix editor is opened, move the selected track's position automix_editor_movetrack 'current' +10 Also accepts 'next' or 'previous' to move the next or previous track. When the number is not given it can be mapped to rotary knobs or jog wheels"
            },
            "automix_skip":
            {
                "description": "When automix is active, skip the current song and mix to the next one"
            },
            "create_list_from_playlist":
            {
                "description": "Save the automix list in MyLists",
                "alias": "create_virtualfolder_from_playlist"
            },
            "get_automix_position":
            {
                "description": "Return position of currently playing song in automix list"
            },
            "get_automix_song":
            {
                "description": "get a property from the next song in automix: \"get_automix_song 'title'\" you can also get properties from songs further down: \"get_automix_song 'title' 2\""
            },
            "get_playlist_time":
            {
                "description": "Gets how much time is left before the end of the automix playlist"
            },
            "mix_and_load_next":
            {
                "description": "automatically mix to the next deck, then stop the current track and load a new song if something is available in the playlist or sidelist by default this will to a tempo mix and sync bpm if the bpm is in range. You can add 'nosync' to mix without tempo synchronization. 'mix_and_load_next nosync'"
            },
            "mix_next":
            {
                "description": "If the non-playing deck has a song loaded that has already been played, load a new one from the playlist. Then smoothly crossfade from the playing deck to the other, using beatsync if appropriate"
            },
            "mix_next_sidelist":
            {
                "description": "If the non-playing deck has a song loaded that has already been played, load a new one from the sidelist. Then smoothly crossfade from the playing deck to the other, using beatsync if appropriate"
            },
            "mix_now":
            {
                "description": "Smoothly crossfade from one side to the other, matching beats when the tempo of both songs is close together When automix is off, fade speed can be adjusted: \"mix_now 4000ms\" or \"mix_now 4bt\""
            },
            "mix_now_nosync":
            {
                "description": "Smoothly crossfade from one side to the other When automix is off, fade speed can be adjusted: \"mix_now_nosync 4000ms\" or \"mix_now_nosync 4bt\""
            },
            "mix_selected":
            {
                "description": "When automix is active, mix to the song currently selected"
            },
            "playlist_add":
            {
                "description": "Add the songs selected in the browser to the automix list"
            },
            "playlist_clear":
            {
                "description": "empty the playlist."
            },
            "playlist_load_and_keep":
            {
                "description": "Load the first song in the automix list on the deck, without removing it from the list"
            },
            "playlist_load_and_remove":
            {
                "description": "Load the first song in the automix list on the deck, and remove it from list"
            },
            "playlist_options":
            {
                "description": "display a drop-down with the list of options for the playlist."
            },
            "playlist_randomize":
            {
                "description": "shuffle the order of the songs in the playlist."
            },
            "playlist_randomize_once":
            {
                "description": "shuffle the order of the songs in the playlist once."
            },
            "playlist_remove_duplicates":
            {
                "description": "remove duplicate songs from the playlist."
            },
            "playlist_remove_played":
            {
                "description": "remove from the playlist all the songs that have already been played since the software was launched."
            },
            "playlist_repeat":
            {
                "description": "repeat (or stop to repeat) the playlist while automixing."
            },
            "playlist_save":
            {
                "description": "save the playlist in a file."
            },
            "relay_play":
            {
                "description": "Enable or disable the decks to automatically start playing when the opposite deck reached its end"
            },
            "sidelist_options":
            {
                "description": "display a drop-down with the list of options for the sidelist."
            },
            "switch_sidelist_playlist":
            {
                "description": "Exchange the content of the automix list and the sidelist"
            }
        },
        "browser":
        {
            "add_favoritefolder":
            {
                "description": "make the selected folder a favorite folder (monitored folders)."
            },
            "add_filterfolder":
            {
                "description": "create a new filter folder."
            },
            "add_list":
            {
                "description": "create a new list (virtual folder).",
                "alias": "add_virtualfolder"
            },
            "add_to_list":
            {
                "description": "Add the currently selected songs in the browser to the specified List.",
                "alias": "virtualfolder_add",
                "examples": "add_to_list \"my_list\""
            },
            "browsed_file_analyze":
            {
                "description": "reanalyze the current file selected in the browser use 'browsed_file_analyze multi' to do a scan for multiple bpms",
                "examples": "browsed_file_analyze | browsed_file_analyze multi"

            },
            "browsed_file_color":
            {
                "description": "set the color of the file currently selected in the browser. Example: browsed_file_color \"red\" Use browsed_file_color \"reset\" to clear the color and set the color back to default"
            },
            "browsed_file_info":
            {
                "description": "Open the Tag Editor for the browsed song."
            },
            "browsed_file_prepare_stems":
            {
                "description": "prepare stems for the file(s) currently selected in the browser"
            },
            "browsed_file_reload_tag":
            {
                "description": "Reload tag of file currently selected in browser. This will overwrite changes made in the VirtualDJ database by what is saved in the file's tag."
            },
            "browsed_file_rename":
            {
                "description": "rename the current file selected in the browser"
            },
            "browsed_file_reveal":
            {
                "description": "open the OS file manager to the browsed song"
            },
            "browser_enter":
            {
                "description": "if focus is on songs, load the selected song. if focus is on folders, change focus to songs."
            },
            "browser_export":
            {
                "description": "Export the current list of files to a CSV or HTML file"
            },
            "browser_folder":
            {
                "description": "if focus is on songs, change focus to folders. if focus is on folders, open or close the subfolders of the selected folder."
            },
            "browser_geniusdj":
            {
                "description": "Lookup recommendations based on the items currently selected in the browser Use 'browser_geniusdj playing' to use the currently playing track instead of the track selected in the browser"
            },
            "browser_gotofolder":
            {
                "description": "'browser_gotofolder' goes to the folder containing the current file. 'browser_gotofolder \"/my_path/my_folder\"' goes to the specified folder. 'browser_gotofolder 4' goes to the fourth virtual/ favorite folder.",
                "examples": "browser_gotofolder | browser_gotofolder \"/my_path/my_folder\" | browser_gotofolder 4"
            },
            "browser_isactive":
            {
                "description": "return true when the browser was used by a controller in the past 6 seconds"
            },
            "browser_move":
            {
                "description": "browser_move +1 : Moves the currently selected song in a playlist down browser_move 'top' or browser_move 'bottom' : Moves the selected song to the top or the bottom of the list"
            },
            "browser_open_folder":
            {
                "description": "Expand selected folder in browser when closed, or close folder when opened. You can also use 'browser_open_folder off' to always close the folder, or 'browser_open_folder on' to open a folder"
            },
            "browser_options":
            {
                "description": "show the context menu about the browser filters, root folders, database, etc"
            },
            "browser_padding":
            {
                "description": "Change the padding around lines in folder and list views.",
                "examples": "browser_padding 50%"
            },
            "browser_remove":
            {
                "description": "Remove the selected song from playlist"
            },
            "browser_scroll":
            {
                "description": "scroll through the songs or folders. 'browser_scroll +1' or 'browser_scroll -1' to scroll one line, or \"browser_scroll 'top'\", \"browser_scroll 'bottom'\" to scroll to the beginning or end"
            },
            "browser_shortcut":
            {
                "description": "'browser_shortcut': assign the current folder as a new shortcut. 'browser_shortcut X': go to the folder assigned to the Xth shortcut"
            },
            "browser_sort":
            {
                "description": "Sort the browser files on the specified column: 'browser_sort \"artist\"', 'browser_sort \"lastplay\"',... To sort in descending order, add a - in front of the column name: 'browser_sort \"-bpm\"' To explicitly sort in ascending order, add a + in front of the column name: 'browser_sort \"+bpm\"' To reset the sort order of a playlist to it's original order, use 'browser_sort \"Original Sort Order\"'"
            },
            "browser_window":
            {
                "description": "Change the active browser zone. \"browser_window 'folders'\", \"browser_window 'songs'\", \"browser_window 'sideview'\", or \"browser_window 'automix'\", \"browser_window 'sidelist'\", \"browser_window 'sampler'\" Cycle through available browser zones. \"browser_window + 1\", \"browser_window - 1\" Cycle through specified zones. Example \"browser_window 'folders,songs'\""
            },
            "browser_zoom":
            {
                "description": "TODO",
                "alias": "browser"
            },
            "clear_search":
            {
                "description": "clear the search string"
            },
            "edit_comment":
            {
                "description": "open a window to edit the comment on the selected track."
            },
            "edit_search":
            {
                "description": "put the keyboard focus in the search zone but keep the actual search string."
            },
            "edit_singer":
            {
                "description": "Pops up the dialog to change the singer of the currently selected song in the karaoke list"
            },
            "file_count":
            {
                "description": "Get number of files currently shown in browser You can also use 'automix', 'sideview', 'karaoke' or 'sidelist' as parameter to get the count in other lists. \"file_count automix\""
            },
            "file_info":
            {
                "description": "Open the Tag Editor for the specified or loaded song."
            },
            "font_size":
            {
                "description": "Change browser font size. Example: font_size +1",
                "examples": "font_size +1 | font_size -1"

            },
            "goto_last_folder":
            {
                "description": "Go back to the last browsed folder"
            },
            "grid_view":
            {
                "description": "put the browser in grid-view mode, optimized for touch screens"
            },
            "has_linked_tracks":
            {
                "description": "Returns true when track has links to other tracks. On a button can be used to show the linked tracks in the sideview You can also use 'has_linked_tracks browsed' to get the result for the currently browsed track Passing a script that returns a full file path is also possible using 'has_linked_tracks `script`'"
            },
            "has_quick_filter":
            {
                "description": "Return true if quick filter with given index exists"
            },
            "info_options":
            {
                "description": "show the context menu about the info panel fields and prelisten behavior",
                "alias": "infos_options"
            },
            "karaoke_add":
            {
                "description": "Add the songs selected in the browser to the karaoke list"
            },
            "karaoke_load":
            {
                "description": "Load the folder or playlist selected in the browser in the karaoke list Use \"karaoke_load 'append'\" to add the selected folder to the karaoke list instead of replacing the existing karaoke"
            },
            "load":
            {
                "description": "load the selected song on the deck. you can also specify a fullpath to load 'load \"path_to_my_song\"'."
            },
            "load_deck_set":
            {
                "description": "Reload a previously saved deck_set file"
            },
            "load_next":
            {
                "description": "Load next track. You can use 'load_next keepplay' to start playing the loaded song if the currently loaded song was playing"
            },
            "load_previous":
            {
                "description": "Load previous track"
            },
            "load_pulse":
            {
                "description": "return a brief false then true again when a new song is loaded"
            },
            "load_pulse_active":
            {
                "description": "return true when a new song becomes audible for the specified duration. Can be delayed using the second parameter. 'load_pulse_active 1000ms 5000ms' will return true for 1 second, 5 seconds after a new song becomes audible"
            },
            "loaded":
            {
                "description": "return true if a song is loaded on the deck"
            },
            "log_search":
            {
                "description": "log the current search in the SearchLog.txt file, so you can easily search for your failed requests once the gig is over."
            },
            "mark_linked_tracks":
            {
                "description": "Mark the tracks in deck 1 and 2 as linked. (Linked tracks can be shown in the remixes tab of the sideview)",
                "alias": "mark_related_tracks"
            },
            "not_played":
            {
                "description": "don't mark the song on this deck as 'played'."
            },
            "page":
            {
                "description": "TODO"
            },
            "playlist_load":
            {
                "description": "Load the folder or playlist selected in the browser in the playlist. Use \"playlist_load 'append'\" to add the selected folder to the playlist instead of replacing the existing playlist"
            },
            "quick_filter":
            {
                "description": "Apply or remove a quick filter on the list of song shown in the browser"
            },
            "rating":
            {
                "description": "Get or set the rating for the current song"
            },
            "recurse_folder":
            {
                "description": "display the content of both the selected folder and all its subfolders in the browser list."
            },
            "save_deck_set":
            {
                "description": "Save the current configuration (which song is loaded on which deck) in a file"
            },
            "search":
            {
                "description": "put the keyboard focus on the search zone, or, if a text parameter is specified, search for this text."
            },
            "search_add":
            {
                "description": "add the specified text to the search query"
            },
            "search_delete":
            {
                "description": "remove the last character from the search query"
            },
            "search_folder":
            {
                "description": "open a dialog to search for folders or playlists by name"
            },
            "search_options":
            {
                "description": "popup the list of search options. to set one directly, you can use 'search_options \"composer\"' to toggle search of the field on or off"
            },
            "search_playlists":
            {
                "description": "open a dialog to search which list contains a specific song by default it searches for the song selected in the browser. Use \"search_playlists deck\" to search for the song loaded on the deck."
            },
            "set_browsed_file_bpm":
            {
                "description": "set the bpm of the selected songs to the set value: 'set_bpm 129.3', or relative to the actual value: 'set_bpm 50%'"
            },
            "sidelist_add":
            {
                "description": "Add the songs selected in the browser to the sidelist"
            },
            "sidelist_clear":
            {
                "description": "clear the sidelist."
            },
            "sidelist_load":
            {
                "description": "Load the folder or playlist selected in the browser in the sidelist Use \"sidelist_load 'append'\" to add the selected folder to the sidelist instead of replacing the existing sidelist"
            },
            "sidelist_load_and_keep":
            {
                "description": "load the first song from the sidelist."
            },
            "sidelist_load_and_remove":
            {
                "description": "load the first song from the sidelist, and remove it from the sidelist."
            },
            "sidereco_options":
            {
                "description": "Show a menu to select what should be displayed in the sideview recommendation panel"
            },
            "sidereco_song":
            {
                "description": "TODO"
            },
            "sidereco_source":
            {
                "description": "TODO"
            },
            "sideview":
            {
                "description": "Show a specific folder in the sideview. Available sideviews are automix,sidelist,karaoke,sampler,clone Use 'sideview +1' or 'sideview -1' to scroll between available sideviews"
            },
            "sideview_options":
            {
                "description": "show the context menu to add or remove folders shortcuts to the sideView"
            },
            "sideview_sort":
            {
                "description": "Sort the sideview on the specified column: 'sideview_sort \"artist\"', 'sideview_sort \"lastplay\"',..."
            },
            "sideview_title":
            {
                "description": "Show the title of the folder selected in sideview"
            },
            "sideview_triggerpad":
            {
                "description": "set the sideview sampler in triggerpad mode or in list mode"
            },
            "undo_load":
            {
                "description": "Unload the song and reload the previous song. Use 'undo_load any' to unload from the last deck a song was loaded on. Otherwise the deck the action is called from is used."
            },
            "unload":
            {
                "description": "unload the song from the deck."
            },
            "view_options":
            {
                "description": "popup the list of view options. to set one directly, you can use 'view_options \"showkaraoke\" on' etc..."
            }
        },
        "config":
        {
            "apply_audio_config":
            {
                "description": "TODO"
            },
            "auto_cue":
            {
                "description": "set the auto_cue mode: \"off\", \"on\", \"always\"."
            },
            "auto_match_bpm":
            {
                "description": "when Auto Match BPM is on, songs are automatically set to the same BPM when loaded"
            },
            "auto_match_key":
            {
                "description": "when Auto Match KEY is on, songs are automatically set to a compatible KEY when loaded, if possible"
            },
            "auto_pitch_lock":
            {
                "description": "when Auto Pitch Lock is on, pitch_lock engages whenever BPMs are matched, so that moving manually one pitch slider will move the other in order to keep the match"
            },
            "connect":
            {
                "description": "TODO"
            },
            "eventscheduler":
            {
                "description": "Open the Event Scheduler"
            },
            "eventscheduler_start":
            {
                "description": "Start the Event Scheduler (can specify one specific saved schedule: eventscheduler_start 'summer_wedding')"
            },
            "fader_start":
            {
                "description": "enable or disable fader start"
            },
            "get_lemode":
            {
                "description": "return true if we are running a LimitedEdition"
            },
            "play_mode":
            {
                "description": "set the mode for play/stop/cue buttons: 'play_mode \"numark\"', or 'play_mode \"pioneer\"'."
            },
            "quantize_loop":
            {
                "description": "when quantize_loop is on, loops automatically align according to the globalQuantize setting"
            },
            "quantize_setcue":
            {
                "description": "when quantize_setcue is on, setting cues automatically align according to the globalQuantize setting"
            },
            "save_config":
            {
                "description": "save your config changes now (usually changes are saved automatically when you close virtualdj)",
                "alias": "saveregistryconfig"
            },
            "setting":
            {
                "description": "read or write a specific setting (see config window for the list of all settings names). Example: setting \"jogSensitivityScratch\" 80% . Example: setting \"videoRandomTransition\" on"
            },
            "setting_ismodified":
            {
                "description": "TODO"
            },
            "setting_reset":
            {
                "description": "reset a setting to its default value"
            },
            "setting_setdefault":
            {
                "description": "change the default value for a setting during this session"
            },
            "setting_setsession":
            {
                "description": "force a specific value for a setting during this session"
            },
            "setting_setsession_deck":
            {
                "description": "force a specific value for a setting during this session for a specific deck"
            },
            "settings":
            {
                "description": "open the configuration window.",
                "alias": "config"
            },
            "smart_cue":
            {
                "description": "when smart_cue is on, songs are automatically re-synchronized when jumped to a new position or cue"
            },
            "smart_loop":
            {
                "description": "when smart_loop is on, loop are automatically adjusted to sound perfect"
            },
            "smart_play":
            {
                "description": "when smart_play is on, songs are automatically synchronized when started",
                "alias": "auto_sync"
            },
            "smart_scratch":
            {
                "description": "when smart_scratch is on, backward scratching is automatically muted, only forward scratching will be heard"
            }
        },
        "controllers":
        {
            "action_deck":
            {
                "description": "return true if the button calling this action is on the specified deck: 'action_deck 1 ? actionA : actionB'"
            },
            "assign_controller":
            {
                "description": "Assign a specific controller to this deck. . 'deck 1 assign_controller \"CDJ400\" 2' assigns the second CDJ400 to deck 1. Or in a controller mapping 'deck 1 assign_controller' will assign the controller the action was executed from to deck 1."
            },
            "controller_battery":
            {
                "description": "TODO"
            },
            "controller_mapping":
            {
                "description": "Assign a mapping to a controller. 'controller_mapping \"My Mapping\"' assigns the mapping 'My Mapping' to the controller the command was executed on. 'controller_mapping \"CDJ400\" \"My Mapping\"' assigns the mapping 'My Mapping' to all CDJ400s. 'controller_mapping \"CDJ400\" \"My Mapping\" 2' assigns the mapping 'My Mapping' to the second CDJ400"
            },
            "controllerscreen_deck":
            {
                "description": "TODO"
            },
            "denon_platter":
            {
                "description": "TODO"
            },
            "device_side":
            {
                "description": "Assign a different action for a button or slider of a device depending on which side of the device it is on: \"device_side 'left' ? action_for_left : action_for_right\". For more than 2-deck controllers, you can use \"device_side 1 ? action1 : device_side 2 ? action2 ? device_side 3 ? action3 : etc...\""
            },
            "display_time":
            {
                "description": "set the mode to display time: \"total\", \"remain\", \"elapsed\", +1 or -1."
            },
            "djc_button":
            {
                "description": "TODO"
            },
            "djc_button_popup":
            {
                "description": "TODO"
            },
            "djc_button_select":
            {
                "description": "TODO"
            },
            "djc_button_slider":
            {
                "description": "TODO"
            },
            "djc_panel":
            {
                "description": "TODO"
            },
            "djc_shift":
            {
                "description": "TODO"
            },
            "effect_fxsendreturndeck":
            {
                "description": "TODO"
            },
            "effect_fxsendreturndeck_multi":
            {
                "description": "Select which source to apply fx to for a specific send/return channel in case there are more than one. 'deck 1 effect_fxsendreturndeck_multi master' : Apply master fx on the first fx send/return pair. 'deck 2 effect_fxsendreturndeck_multi mic' : Apply mic fx on the second fx send/return pair. 'deck 2 effect_fxsendreturndeck_multi 4' : Apply deck 4 fx on the second fx send/return pair"
            },
            "effect_fxsendreturnenable":
            {
                "description": "TODO"
            },
            "gemini_waveform_zoomlevel":
            {
                "description": "TODO"
            },
            "get_controller_image":
            {
                "description": "Use in controller mappings to get the cover art from deck for use on controllers with screens"
            },
            "get_controller_name":
            {
                "description": "return the name(s) of the controller(s) assigned to this deck"
            },
            "get_controller_screen":
            {
                "description": "TODO"
            },
            "get_denon_cuepoints":
            {
                "description": "'get_denon_cuepoints 100' for a led bar with 100 leds. Number must match the number of leds in the led bar in the definition."
            },
            "get_denon_platter":
            {
                "description": "TODO"
            },
            "get_display":
            {
                "description": "get some text to display. depending on the latest action, it can be the name of an effect, the folder being browsed, the title of the current song, etc... for multiline displays, you can add the line number: \"get display 1\", \"get display 2\"."
            },
            "get_gemini_display":
            {
                "description": "TODO"
            },
            "get_gemini_waveform":
            {
                "description": "TODO"
            },
            "get_ns7_platter":
            {
                "description": "TODO"
            },
            "get_numark_beatgrid":
            {
                "description": "TODO"
            },
            "get_numark_songpos":
            {
                "description": "TODO"
            },
            "get_numark_waveform":
            {
                "description": "TODO"
            },
            "get_pioneer_display":
            {
                "description": "TODO"
            },
            "get_pioneer_loop_display":
            {
                "description": "TODO"
            },
            "get_rotation_cue":
            {
                "description": "get the angle of the cue point on the disc"
            },
            "get_rotation_slip":
            {
                "description": "get the angle of the slip point on the disc when slip is active, or regular get_rotation otherwise"
            },
            "invert_controllers":
            {
                "description": "Invert the deck of the controllers"
            },
            "keyboard_shortcuts":
            {
                "description": "Map to CTRL or ALT. While pressed will show keyboard overlay in browser. Double-press to activate sticky keys.. Accepts time to delay showing overlay (keyboard_shortcuts 500ms). In scripts can also be used to turn on or off the overlay manually (keyboard_shortcuts on)"
            },
            "menu":
            {
                "description": "display a menu on the controller's screen, that allows to change the behaviour of the menu_buttons. you can navigate through the menu using the browser_scroll action'."
            },
            "menu_button":
            {
                "description": "defines a button whose behaviour can be changed by a menu. Syntax: 'menu_button 1 \"hotcue,sampler,effect,loop\"'."
            },
            "menu_cycledisplay":
            {
                "description": "on single-line controllers, cycle display when no menu is shown between artist - title, artist or title"
            },
            "midiclock_active":
            {
                "description": "Toggle sending midiclock to the specified controller"
            },
            "miditovst_active":
            {
                "description": "Toggle sending midi from a specific controller to the specified deck's VST instruments or effects"
            },
            "mixer_order":
            {
                "description": "For controllers with 4 decks, specify the order of the decks, from left to right. Default: \"mixer_order 3124\""
            },
            "motor_switch":
            {
                "description": "assign this deck to be controlled by the motorized wheel"
            },
            "motorwheel_instant_play":
            {
                "description": "when set to on, the song will start instantly, bypassing the ramp up time the motor takes to reach its full rotation speed (the drawback is that then you cannot hold the disc still when your start the motor)"
            },
            "ns7_platter":
            {
                "description": "TODO"
            },
            "numark_waveform_zoom":
            {
                "description": "Set numark waveform zoom (value from 0 to 3, or +1, -1 to step through zoom levels)"
            },
            "os2l_button":
            {
                "description": "Send a command to a DMX software over OS2L: 'os2l_button \"blackout\"', 'os2l_button \"fog machine\" while_pressed', etc.. If you want to specify a page, you can use 'os2l_button \"mypage\" \"mybutton\"'.. If the DMX software doesn't send feedback commands, os2l_button acts as a flash button (it sends 'on' when pressed, 'off' when released) - use 'os2l_button \"mybutton\" on' to not send commands on release.. If the DMX software sends feedback commands, os2l_button acts as a toggle button (it sends the opposite of the last feedback when pressed, nothing on release) - use 'os2l_button \"mybutton\" while_pressed' to send a command on release."
            },
            "os2l_cmd":
            {
                "description": "Send a numeric command to a DMX software over OS2L: 'os2l_cmd 42 on' or 'os2l_cmd 43 50%'"
            },
            "os2l_info":
            {
                "description": "TODO"
            },
            "os2l_scene":
            {
                "description": "similar to os2l_button, but sends 'on' to the DMX software only if the button was not active yet, and only if the deck is audible. (requires feedback from the DMX software). when the deck is not audible, the scene will be queued and started when the deck becomes audible. os2l_scene \"scene1\". os2l_scene \"mypage\" \"myscene\""
            },
            "phase_movement":
            {
                "description": "TODO"
            },
            "phase_position":
            {
                "description": "TODO"
            },
            "pioneer_cue":
            {
                "description": "On when playing or paused on cue, blinking when paused and not on cue, off when no track loaded"
            },
            "pioneer_play":
            {
                "description": "On when playing, off when no track loaded, blinking when paused or playing with cue stutter"
            },
            "refresh_controller":
            {
                "description": "refresh the display of the specified controller (or all if none specified)."
            },
            "reinit_controller":
            {
                "description": "Reinit the specified controller (or all if none specified), going through the exit and init sequences (you can specify a delay between exit and init: \"reinit_controllers 'mycontroller' 200ms\"."
            },
            "rescan_controllers":
            {
                "description": "rescan for newly connected controllers."
            },
            "rzx_touch":
            {
                "description": "TODO"
            },
            "rzx_touch_x":
            {
                "description": "TODO"
            },
            "rzx_touch_y":
            {
                "description": "TODO"
            },
            "select_master_output":
            {
                "description": "Select if the audio should be played on the computer speakers or on the controller audio output"
            },
            "set_deck":
            {
                "description": "use script or implicit variable to affect which deck the action is applied to. example: 'set_deck `get_var varname` & play'"
            },
            "shift":
            {
                "description": "set or query the built-in shift variable, used for controllers"
            },
            "show_text":
            {
                "description": "Show text on controller display. (If your controller uses get_display for the displays). \"show_text 'Line 1|Line 2' 3000ms\" will show 2 lines of text for 3 seconds (time optional, | separates lines). \"show_text '$myvar$'\" shows the contents of the variable $myvar"
            },
            "v7_status":
            {
                "description": "TODO"
            }
        },
        "cues":
        {
            "cue":
            {
                "description": "if playing, go to the last cue point and continue playing. if paused, set the current position as cue point, and preview the cue as long as pressed. if in loop, change loop_in to the cue point but keep the loop's length. you can specify a number ('cue 1', 'cue 57') to work with several cues."
            },
            "cue_action":
            {
                "description": "TODO"
            },
            "cue_button":
            {
                "description": "act like cue_stop, cue_play or cue_cup depending on the cueMode setting",
                "alias": "cue_3button"
            },
            "cue_color":
            {
                "description": "query or set the color of a cue point. Query example: cue_color 1. Set example: cue_color 1 'yellow'"
            },
            "cue_countdown":
            {
                "description": "count down to the next cue (or end) in beats. use 'cue_countdown color' or 'cue_countdown name' to get the name or color of the next cue point"
            },
            "cue_counter":
            {
                "description": "count up or down to the nearest cue point in beats. use 'cue_counter color' or 'cue_counter name' to get the name or color of the nearest cue point"
            },
            "cue_countup":
            {
                "description": "count up from the last cue point (or start) in beats. use 'cue_countup color' or 'cue_countup name' to get the name or color of the last cue point"
            },
            "cue_cup":
            {
                "description": "if playing, rewind to the last cue point, and start again on release. if paused, set the current position as cue point."
            },
            "cue_display":
            {
                "description": "Show information about a cue point based on the cueDisplay config option.. Example: 'cue_display 1'. Can also be used to modify the cueDisplay option by using +1 or -1 as parameter: 'cue_display +1'. The cueDisplay option can also be set by name: 'cue_display name'"
            },
            "cue_loop":
            {
                "description": "Jump to a cue and stay in a loop. Use cue_loop_hold to select if loop is temporary, or stays until pressed again. When the cueLoopAutoSync option is enabled, jumping to the cue is beat synchronized"
            },
            "cue_loop_autosync":
            {
                "description": "TODO"
            },
            "cue_loop_hold":
            {
                "description": "Toggle cue_loop between looping while pressed and turn loop on/off"
            },
            "cue_name":
            {
                "description": "\"cue_name 1\" returns the name of cue point #1, or changes the cue point when pressed"
            },
            "cue_play":
            {
                "description": "if playing, pause and go to the last cue point. if paused, set the current position as cue point, and preview the cue as long as pressed. if you kept pressed more than 2s (or the time specified), it will continue playing once you release. syntax: 'cue_play 1 1000ms'"
            },
            "cue_pos":
            {
                "description": "\"cue_pos 1\" returns the position of cue point #1 as a percentage. \"cue_pos 1 msec\", \"cue_pos 1 sec\", \"cue_pos 1 min\" returns the position of cue point #1, msec, sec and min parts. \"cue_pos 1 mseconly\" returns the position of cue point #1 in milliseconds. \"cue_pos 1 beats\" returns the position of the cue point in number of beats from first beat"
            },
            "cue_select":
            {
                "description": "Select the nth cue point as default cue point for cue, hotcue, etc.. actions. Does not change position to the selected cue point."
            },
            "cue_stop":
            {
                "description": "if playing, pause and go to the last cue point. if paused, set the current position as cue point, and preview the cue as long as pressed. you can specify a number ('cue_stop 1', 'cue_stop 57') to work with several cues."
            },
            "cues_options":
            {
                "description": "Show some options about cues"
            },
            "delete_cue":
            {
                "description": "Deletes a stored cue point. If no cue number is specified, it will delete the currently active cue point"
            },
            "get_cue":
            {
                "description": "returns the currently active cue, or 0 if no cue point is active"
            },
            "goto_cue":
            {
                "description": "Go to the specified cue. Example \"goto_cue 1\", \"goto_cue +1\", \"goto_cue -1\". \"goto_cue\" will jump to the currently selected/last used cue."
            },
            "has_cue":
            {
                "description": "returns true if the specified cue number is set"
            },
            "hot_cue":
            {
                "description": "if no cue point is set, or if 'cue', 'cue_stop' or 'cue_play' is pressed, set one at the current position. otherwise go to the cue point and start or continue playing. if in loop, set the cue point as new loop_in but keep loop_length. you can specify a number ('hot_cue 1', 'hot_cue 57') to work with several cues.",
                "alias": "hotcue"
            },
            "lock_cues":
            {
                "description": "lock/unlock the cues for this particular song, so that cue actions cannot inadvertently modify them while you're playing"
            },
            "set_cue":
            {
                "description": "store the current position in the cue. if one parameter is given, it's the number of the cue to use. if two parameters are given, the second is the position to store, in ms, in beats, or in percentage of the song length."
            },
            "shift_all_cues":
            {
                "description": "shift all the cues of the song from the given amount (can be used to fix the cues from v7 imported files in case the automatic fix didn't work properly): 'shift_all_cues -10ms'"
            },
            "silent_cue":
            {
                "description": "Mute track when enabled until a hot cue is activated"
            },
            "sort_cues":
            {
                "description": "sort cue points chronologically"
            }
        },
        "deck_select":
        {
            "cross_assign":
            {
                "description": "assign this deck to a side of the crossfader: \"deck 3 cross_assign 'left'\" or \"deck 3 cross_assign 'thru'\""
            },
            "get_deck_color":
            {
                "description": "return blue or red if the deck is the left deck or right deck (and gray otherwise). Can be used with a darkness modifier: 'get_deck_color 50%'. Use 'get_deck_color \"absolute\"' or 'get_deck_color \"absolute\" 50%' to get a color based on actual deck rather than left/right (red for deck 1, blue for deck 2, orange for deck 3, green for deck 4)"
            },
            "invert_deck":
            {
                "description": "switch leftdeck between deck 1 and deck 3 or rightdeck between deck 2 and deck 4. \"invert_deck\" to swap the calling deck, or \"invert_deck 'left'\", \"invert_deck 'right'\" to specifically switch left or right deck"
            },
            "leftcross":
            {
                "description": "assign this deck to the left of the crossfader: \"deck 3 leftcross\". \"deck 3 leftcross 'only'\" to assign only deck 3 to left of the crossfader. \"leftcross 'none'\" to disable the left crossfader"
            },
            "leftdeck":
            {
                "description": "select this deck to be the left deck: \"deck 3 leftdeck\" or \"leftdeck +1\""
            },
            "masterdeck":
            {
                "description": "select/unselect this deck as 'master deck'. When a master deck is set, all synchronization operations will take the master deck as reference. (for skins with more than 2 decks)"
            },
            "masterdeck_auto":
            {
                "description": "remove the masterdeck selection and put back automatic masterdeck behavior"
            },
            "pfl":
            {
                "description": "select if this deck is sent to the headphones. (can be used with a slider or a % to specify the volume: 'pfl 75%')"
            },
            "rightcross":
            {
                "description": "assign this deck to the right of the crossfader: \"deck 3 rightcross\""
            },
            "rightdeck":
            {
                "description": "select this deck to be the right deck: \"deck 3 rightdeck\" or \"rightdeck +1\""
            },
            "select":
            {
                "description": "select this deck as 'working deck'. the beat of the working deck will be shown in front in the display, and shortcuts and actions with no specified deck will affect this deck.\. Unless PFL has been set manually, the PFL will also follow the working deck."
            }
        },
        "equalizer":
        {
            "eq_crossfader_high":
            {
                "description": "crossfade the treble between both decks"
            },
            "eq_crossfader_low":
            {
                "description": "crossfade the bass between both decks"
            },
            "eq_crossfader_mid":
            {
                "description": "crossfade the center frequencies between both decks.",
                "alias": "eq_crossfader_med"
            },
            "eq_high":
            {
                "description": "change the amount of HiHat, Vocal or High (depending on EQ control mode).",
                "alias": "eq_high_slider"
            },
            "eq_high_freq":
            {
                "description": "set the treble equalizer"
            },
            "eq_kill_high":
            {
                "description": "mute the treble"
            },
            "eq_kill_low":
            {
                "description": "mute the bass."
            },
            "eq_kill_mid":
            {
                "description": "mute the medium.",
                "alias": "eq_kill_med"
            },
            "eq_low":
            {
                "description": "change the amount of Kick or Low in the mix (depending on EQ control mode).",
                "alias": "eq_low_slider"
            },
            "eq_low_freq":
            {
                "description": "set the bass equalizer"
            },
            "eq_mid":
            {
                "description": "change the amount of Melody, Vocals or Medium (depending on EQ control mode).",
                "alias": "eq_med | eq_mid_slider"
            },
            "eq_mid_freq":
            {
                "description": "set the medium equalizer"
            },
            "eq_mode":
            {
                "description": "Select the behavior of the EQs knobs (frequency, modernEQ or EZRemix). Can be used to switch between Frequency and your preferred stems mode using 'eq_mode +1'. To change the eq mode only for a single deck, use \"eq_mode +1 deck\" (or \"deck 1 eq_mode +1 deck\" to specify deck 1 in your script). To select a specific behavior, you can use \"eq_mode frequency\", \"eq_mode modernEQ\", \"eq_mode ezRemix\" or \"eq_mode stems\""
            },
            "eq_reset":
            {
                "description": "reset the equalizer."
            },
            "filter":
            {
                "description": "apply the selected colorfx to the sound (nothing applied at 50%, and more applied the farther from the center)",
                "alias": "filter_slider"
            },
            "filter_activate":
            {
                "description": "enable or disable the deck filter"
            },
            "filter_label":
            {
                "description": "get the text to display under the filter knob. (use filter_label \"clean\" to always get the value, and filter_label \"name\" to always get the name)"
            },
            "filter_resonance":
            {
                "description": "change the resonance of the filter"
            },
            "filter_selectcolorfx":
            {
                "description": "Select the color effect controlled by the filter knob"
            },
            "has_stems":
            {
                "description": "Return true if the track has stems available. Can also be called with 'has_stems \"2.0\"' to check for new engine, or 'has_stems \"ready\"' to check if stems are ready at the current playing position"
            },
            "high_label":
            {
                "description": "TODO"
            },
            "low_label":
            {
                "description": "TODO"
            },
            "mid_label":
            {
                "description": "TODO"
            },
            "mute_stem":
            {
                "description": "mute one stem. Stem names are: \"HiHat\", \"Vocal\", \"Instru\", \"Bass\", \"Kick\", or you can use aggregate stems: \"Melody\" (Instru+Bass), \"Rhythm\" (HiHat+Kick), \"MeloRhythm\" (Instru+Bass+HiHat+Kick)"
            },
            "only_stem":
            {
                "description": "keep only one stem. Stem names are: \"HiHat\", \"Vocal\", \"Instru\", \"Bass\", \"Kick\", or you can use aggregate stems: \"Melody\" (Instru+Bass), \"Rhythm\" (HiHat+Kick), \"MeloRhythm\" (Instru+Bass+HiHat+Kick)"
            },
            "stem":
            {
                "description": "Change the amount of a stem in the mix. Stem names are: \"HiHat\", \"Vocal\", \"Instru\", \"Bass\", \"Kick\", or you can use aggregate stems: \"Melody\" (Instru+Bass), \"Rhythm\" (HiHat+Kick), \"MeloVocal\" (Melody/Vocal), \"MeloRhythm\" (Melody/Rhythm).. To get kill on left side and isolate on right side of the slider, you can use \"FullVocal\", \"FullMelo\" and \"FullRhythm\". To map a slider to always control the equalizer, regardless of EQ mode, you can use \"stem FreqHi\", \"stem FreqMid\", and \"stem FreqLo\""
            },
            "stem_color":
            {
                "description": "get the default color of a specific stem"
            },
            "stem_pad":
            {
                "description": "mute a stem (or isolate if pressed with Shift). Stem names are: \"HiHat\", \"Vocal\", \"Instru\", \"Bass\", \"Kick\", \"Rhythm\", \"MeloRhythm\", \"Acapella\", \"Instrumental\""
            },
            "stems_bleed":
            {
                "description": "Control how much the fast stems separation algorithm will allow bleeding. The action affects one of the four bleeding values (MuteVocal, MuteInstru, OnlyVocal, OnlyInstru) depending on what is currently muted or isolated on the deck. (NOTE: this does nothing on the regular HiQuality algorithm)"
            }
        },
        "get":
        {
            "browsed_song":
            {
                "description": "set a property of the currently browsed file: \"browsed_song 'rating' 5\", ..."
            },
            "browsed_song_hashtag":
            {
                "description": "add or remove a hash tag from user1, user2 or comment of the currently browsed file: \"browsed_song_hashtag 'user 1' '#high_energy'\""
            },
            "get_activedeck":
            {
                "description": "get the number of the sync master deck"
            },
            "get_album":
            {
                "description": "TODO"
            },
            "get_arm":
            {
                "description": "get the position of the turntable arm"
            },
            "get_artist":
            {
                "description": "TODO"
            },
            "get_artist_before_feat":
            {
                "description": "Return artist of the track, with 'featuring' stripped"
            },
            "get_artist_title":
            {
                "description": "TODO"
            },
            "get_artist_title_separator":
            {
                "description": "Return a dash ( - ) if there is both an artist and a title"
            },
            "get_askthedj":
            {
                "description": "Returns the latest request from ask the dj (requires askTheDJMonitoring setting to be on always). Use 'get_askthedj 2' to get the second latest request, etc."
            },
            "get_askthedj_unread":
            {
                "description": "Returns the number of unread Ask The DJ requests (requires askTheDJMonitoring setting to be on always)"
            },
            "get_automix":
            {
                "description": "get the position of the automix crossfader"
            },
            "get_bar":
            {
                "description": "returns the current bar number (1 bar = 4 beats)"
            },
            "get_beat":
            {
                "description": "get the intensity of the beat at the current position (0% to 100%)."
            },
            "get_beat2":
            {
                "description": "get the intensity of the beats from both decks at the same time."
            },
            "get_beat_bar":
            {
                "description": "get the position in % in the 4:4 bar (or in 4:16 if called with 'get beat_bar 16')"
            },
            "get_beat_counter":
            {
                "description": "get the position of the beat counter"
            },
            "get_beat_num":
            {
                "description": "\"get_beat_num\" returns a value between 1 and 4 indicating the beat in the measure. \"get_beat_num 1 4\" returns true when the first beat of the measure is currently playing. \"get_beat_num 1\" returns true when the first beat of a 4-beat measure is currently playing (works from 1 to 4). \"get_beat_num 16\" returns a percentage indicating the beat position in a 16-beat phrase (works with any phrase number larger than 4)"
            },
            "get_beatdiff":
            {
                "description": "Get the distance between the beat from this deck and the beat from the active deck. 50% means the deck are aligned, 0% means this deck is late half a beat, 100% means it is ahead half a beat. 'get_beatdiff 4' will return the distance percentage between bars instead of beats"
            },
            "get_beatgrid":
            {
                "description": "get the intensity of the beat based on the beatgrid (100% if on the beat, 0% if halfway between to beats)."
            },
            "get_beatpos":
            {
                "description": "get the current position in beatgrid coordinate (27.5 would mean halfway between the 27th and 28th beats in the song)."
            },
            "get_bpm":
            {
                "description": "Get the bpm of the song. Use 'get_bpm absolute' to get the original bpm of the song (not changing when changing the pitch)"
            },
            "get_browsed_album":
            {
                "description": "TODO"
            },
            "get_browsed_artist":
            {
                "description": "TODO"
            },
            "get_browsed_artist_title":
            {
                "description": "TODO"
            },
            "get_browsed_bpm":
            {
                "description": "TODO"
            },
            "get_browsed_color":
            {
                "description": "'get_browsed_color 0 red 255' (item, component, default). 'get_browsed_color 0 white' (item, default) returns color for selected item. This includes color filters. (For manually selected color only, use 'get_browsed_song color' instead)"
            },
            "get_browsed_comment":
            {
                "description": "TODO"
            },
            "get_browsed_composer":
            {
                "description": "TODO"
            },
            "get_browsed_filepath":
            {
                "description": "get the filepath of the song currently selected in the browser"
            },
            "get_browsed_folder":
            {
                "description": "get the name of the folder selected in the browser"
            },
            "get_browsed_folder_icon":
            {
                "description": "TODO"
            },
            "get_browsed_folder_path":
            {
                "description": "get the full path of the folder selected in the browser"
            },
            "get_browsed_folder_scrollpos":
            {
                "description": "TODO"
            },
            "get_browsed_folder_scrollsize":
            {
                "description": "TODO"
            },
            "get_browsed_folder_selection_index":
            {
                "description": "'get_browsed_folder_selection 1 3' returns true if the first line is the selected line in a browser 3 lines high. 'get_browsed_folder_selection 3' returns the line number of the selected line in a browser 3 lines high (between 1 and 3)"
            },
            "get_browsed_folder_tab":
            {
                "description": "TODO"
            },
            "get_browsed_genre":
            {
                "description": "TODO"
            },
            "get_browsed_header":
            {
                "description": "TODO"
            },
            "get_browsed_key":
            {
                "description": "TODO"
            },
            "get_browsed_scrollpos":
            {
                "description": "TODO"
            },
            "get_browsed_scrollsize":
            {
                "description": "TODO"
            },
            "get_browsed_selection_index":
            {
                "description": "'get_browsed_selection 1 3' returns true if the first line is the selected line in a browser 3 lines high. 'get_browsed_selection 3' returns the line number of the selected line in a browser 3 lines high (between 1 and 3)"
            },
            "get_browsed_song":
            {
                "description": "get a property from the currently browsed file: \"get_browsed_song 'title'\", \"get browsed_song 'playcount'\", etc..."
            },
            "get_browsed_title":
            {
                "description": "TODO"
            },
            "get_browsed_title_artist":
            {
                "description": "TODO"
            },
            "get_build":
            {
                "description": "Returns build number"
            },
            "get_comment":
            {
                "description": "TODO"
            },
            "get_composer":
            {
                "description": "TODO"
            },
            "get_custom_text":
            {
                "description": "TODO"
            },
            "get_deck":
            {
                "description": "get the number of the deck"
            },
            "get_deck_analysis":
            {
                "description": "TODO"
            },
            "get_deck_letter":
            {
                "description": "get the letter of the deck"
            },
            "get_decks":
            {
                "description": "get the total number of decks of the current skin (can also be used with argument to compare: 'get_decks 4' returns true if 'get_decks' would return 4, false otherwise)"
            },
            "get_defaultdeck":
            {
                "description": "get the number of the default deck"
            },
            "get_featuring_after_artist":
            {
                "description": "Return featuring artist, stripped from artist or title field"
            },
            "get_filename":
            {
                "description": "TODO"
            },
            "get_filepath":
            {
                "description": "get the filepath of the song on the deck"
            },
            "get_filesize":
            {
                "description": "TODO"
            },
            "get_firstbeat":
            {
                "description": "get the position of the first beat (in milliseconds)"
            },
            "get_firstbeat_local":
            {
                "description": "get the position of the first beat in the current phrase 16 beats (in milliseconds)"
            },
            "get_genre":
            {
                "description": "TODO"
            },
            "get_hasheadphones":
            {
                "description": "True when a headphones output is configured in sound setup, or when the controller has a headphone volume control",
                "alias": "get_hasheadphone"
            },
            "get_hasinput":
            {
                "description": "returns true if the current soundconfig includes any input (mic, linein or timecode)"
            },
            "get_haslinein":
            {
                "description": "returns true if the current soundconfig includes some linein inputs"
            },
            "get_hasmaster":
            {
                "description": "True when a master output is configured in sound setup, false for external mixer configurations"
            },
            "get_hasmic":
            {
                "description": "returns true if the current soundconfig includes a mic input"
            },
            "get_hwnd":
            {
                "description": "return the Windows handle to VirtualDJ's window"
            },
            "get_leftdeck":
            {
                "description": "get the number of the left deck"
            },
            "get_license":
            {
                "description": "TODO"
            },
            "get_loaded_song":
            {
                "description": "get a property from the song loaded on the deck: \"deck 2 get_loaded_song 'album'\""
            },
            "get_loaded_song_color":
            {
                "description": "'get_loaded_song_color red 255' (component, default color). 'get_loaded_song_color white' (default color) returns color for the loaded track. This includes color filters. (For manually selected color only, use 'get_loaded_song color' instead)"
            },
            "get_membership":
            {
                "description": "TODO"
            },
            "get_phrase_num":
            {
                "description": "\"get_phrase_num\" returns a value between 1 and 4 indicating the measure number. \"get_phrase_num 1\" returns true when the first measure of the phrase is currently playing"
            },
            "get_plugindeck":
            {
                "description": "For use in plugins. Returns 1,2,etc... when plugin is active on a deck, 0 for master, -1 for sampler, -2 for mic"
            },
            "get_position":
            {
                "description": "get the position in the song"
            },
            "get_record_message":
            {
                "description": "get the message displayed on the record page"
            },
            "get_record_min":
            {
                "description": "get the minutes of the recording time"
            },
            "get_record_ms":
            {
                "description": "get the milliseconds of the recording time"
            },
            "get_record_msf":
            {
                "description": "get the frames of the recording time"
            },
            "get_record_sec":
            {
                "description": "get the seconds of the recording time"
            },
            "get_record_size":
            {
                "description": "get the current size of the recording file"
            },
            "get_record_time":
            {
                "description": "get the time already spent recording"
            },
            "get_remix_after_title":
            {
                "description": "Return remix of the track loaded on the deck like \"(remix)\" Remix will automatically be extracted from title if remix field is empty"
            },
            "get_rightdeck":
            {
                "description": "get the number of the right deck"
            },
            "get_rotation":
            {
                "description": "get the angle of the disc"
            },
            "get_song_event":
            {
                "description": "Provide analysis about current and coming events in the song. Can be used when writing visualisation plugins.. The first parameter is \"current\" or \"next\" to get the current or the coming event.. The second parameter can be \"hasbeats\", \"volume\", \"volume_end\", \"remaining\""
            },
            "get_songlength":
            {
                "description": "get the length in seconds of the song on the deck"
            },
            "get_spectrum_band":
            {
                "description": "get the level of a single spectrum band. 'get_spectrum_band 1'. Use 'deck master' in front to get spectrum of the master deck 'deck master get_spectrum_band 1'. By default there are 32 bands, to use a smaller number of bands, use 'get_spectrum_band 1 3' to get the first of 3 bands. The third parameter can be used to get a spectrum of stems 'get_spectrum_band 1 32 vocals'"
            },
            "get_time":
            {
                "description": "get the elapsed time (or remaining or total depending on \"display_time\"), in milliseconds.. Use 'get time 1000' to get another unit than ms (1000=ms, 25=1/25th of seconds, 44100=frames, etc). . Use \"elapsed\", \"remain\" or \"total\" to bypass the setting of display_time. Use \"absolute\" not to take the pitch into account.. On texts, use \"short\" to hide the decimals. Example: get_time \"remain\" \"short\""
            },
            "get_time_hour":
            {
                "description": "Get the hours of the elapsed time (or remaining or total, depending on \"display_time\"). Use 'get_time_hour \"absolute\"' if you don't want to take the pitch variations into account. You can write 'get_time_hour \"elapsed\"' or \"remain\" or \"total\" to bypass the setting of display_time"
            },
            "get_time_min":
            {
                "description": "get the minutes of the elapsed time (or remaining or total, depending on \"display_time\"). use 'get time_min \"absolute\"' if you don't want to take the pitch variations in account. you can write 'get time_min \"elapsed\"' or \"remain\" or \"total\" to bypass the setting of display_time"
            },
            "get_time_ms":
            {
                "description": "get the 1/100th seconds of the elapsed time (or remaining or total, depending on \"display_time\"). use 'get_time_ms 1000' to get the actual milliseconds"
            },
            "get_time_msf":
            {
                "description": "get the MSF frame of the elapsed time (or remaining or total, depending on \"display_time\")."
            },
            "get_time_sec":
            {
                "description": "get the seconds of the elapsed time (or remaining or total, depending on \"display_time\")."
            },
            "get_time_sign":
            {
                "description": "Get the sign (-1 or +1) of the elapsed time (or remaining or total, depending on \"display_time\"). You can write 'get_time_sign \"elapsed\"' or \"remain\" or \"total\" to bypass the setting of display_time"
            },
            "get_title":
            {
                "description": "TODO"
            },
            "get_title_artist":
            {
                "description": "TODO"
            },
            "get_title_before_remix":
            {
                "description": "Return title of the track. If remix is empty, the part in brackets in the title is removed (and shown by get_remix_after_title)"
            },
            "get_title_remix":
            {
                "description": "Return combination of title and remix: \"Title (Remix)\"."
            },
            "get_totaltime_min":
            {
                "description": "get the minutes of the length of the song"
            },
            "get_totaltime_ms":
            {
                "description": "get the 1/100th seconds of the length of the song"
            },
            "get_totaltime_msf":
            {
                "description": "get the frames of the length of the song"
            },
            "get_totaltime_sec":
            {
                "description": "get the seconds of the length of the song"
            },
            "get_username":
            {
                "description": "TODO"
            },
            "get_vdj_folder":
            {
                "description": "return the home folder of VirtualDJ."
            },
            "get_version":
            {
                "description": "Returns version as text such as \"2025\""
            },
            "get_volume":
            {
                "description": "get the volume applied by both the volume sliders and the crossfader"
            },
            "get_year":
            {
                "description": "TODO"
            },
            "has_aux":
            {
                "description": "returns true if the current soundconfig includes a aux input"
            },
            "loaded_song":
            {
                "description": "set a property of the currently loaded file: \"loaded_song 'rating' 5\", ..."
            },
            "loaded_song_hashtag":
            {
                "description": "add or remove a hash tag from user1, user2 or comment of the currently loaded song: \"loaded_song_hashtag 'user 1' '#high_energy'\""
            },
            "prelisten_info":
            {
                "description": "TODO"
            }
        },
        "karaoke":
        {
            "get_karaoke_background_song":
            {
                "description": "Get info about the background song playing in karaoke mode"
            },
            "get_next_karaoke_song":
            {
                "description": "Get info about the upcoming karaoke tracks. Example 'get_next_karaoke_song \"singer\" +1'"
            },
            "has_karaoke_next":
            {
                "description": "On when karaoke mode is active and there is still another singer queued"
            },
            "is_karaoke_idle":
            {
                "description": "On when karaoke mode is active but not playing. (Background music may be playing)"
            },
            "is_karaoke_playing":
            {
                "description": "On when karaoke track is playing and karaoke mode is active. Off when background music is playing"
            },
            "karaoke":
            {
                "description": "Start or stop automatic karaoke loading and background music"
            },
            "karaoke_options":
            {
                "description": "show the contextmenu with the karaoke options"
            },
            "karaoke_show":
            {
                "description": "show the singer list on the video output"
            },
            "karaoke_venue_name":
            {
                "description": "TODO"
            }
        },
        "key":
        {
            "get_harmonic":
            {
                "description": "TODO"
            },
            "get_key":
            {
                "description": "get the key of the current song, based on keyDisplay option. Use get_key \"musical\" or get_key \"harmonic\" to get a specific display independent of keyDisplay option"
            },
            "get_key_color":
            {
                "description": "Return color of the current key of the track in the specified deck"
            },
            "get_key_modifier":
            {
                "description": "get the number of semitone up or down currently applied to the song"
            },
            "get_key_modifier_text":
            {
                "description": "get the number of semitone up or down currently applied to the song"
            },
            "key":
            {
                "description": "change the key of the song, from -12 (one octave down) to +12 (one octave up), only in multiple of semitones."
            },
            "key_lock":
            {
                "description": "activate/deactivate the key lock (to make the pitch slider change the speed of the song, but keep the key of the song like it is now).",
                "alias": "keylock"
            },
            "key_match_button":
            {
                "description": "Match key to the other deck's key on first press, or reset key to normal on second press"
            },
            "key_match_menu":
            {
                "description": "Open a menu to select a different key for the current song"
            },
            "key_move":
            {
                "description": "move the key up or down from the given amount of semitones."
            },
            "key_smooth":
            {
                "description": "change the key of the song, from -6 (half octave down) to +6 (half octave up), allowing not only multiple of semitones.. use key_smooth full for full octave up or down"
            },
            "keycue_pad":
            {
                "description": "change the key depending on the pad and play the current cue point"
            },
            "keycue_pad_color":
            {
                "description": "green for the selected key, magenta for lower keys, orange for higher keys and white for no key change"
            },
            "keycue_pad_jump":
            {
                "description": "when on, keycue_pad will jump to the cue point on each press, when off, keycue_pad will only modify the key without jumping to the cue point"
            },
            "keycue_pad_page":
            {
                "description": "change the offset of the key change by keycue_pad actions"
            },
            "match_key":
            {
                "description": "change the key of the song to match the given key. you can use standard notation ('match_key \"A#m\"') or numeric ('match_key \"03A\"'). if no given key, it will use the other deck. the change will be the smallest change to make it compatible with the given key."
            },
            "set_key":
            {
                "description": "change the key of the song to match the given key. you can use standard notation ('set_key \"A#m\"') or numeric ('set key \"03A\"'). if no given key, it will use the other deck. the change will match the exact key."
            }
        },
        "loop":
        {
            "get_active_loop":
            {
                "description": "get the number of beats in the current loop"
            },
            "get_loop":
            {
                "description": "get the number of beats in the current loop or the default loop size if no loop is active"
            },
            "get_loop_in_time":
            {
                "description": "Get time (in ms) of the start of the loop. Use \"get_loop_in_time 1.0\" to return the time in seconds instead of milliseconds. Use \"get_loop_in_time on\" to return the loop in time even when no loop is active"
            },
            "get_loop_out_time":
            {
                "description": "Get time (in ms) of the end of the loop. Use \"get_loop_out_time 1.0\" to return the time in seconds instead of milliseconds. Use \"get_loop_out_time on\" to return the loop out time even when no loop is active"
            },
            "get_saved_loop":
            {
                "description": "get information about a saved loop: get_saved_loop 'pos', get_saved_loop 'length', get_saved_loop 'name'"
            },
            "loop":
            {
                "description": "set or remove a loop. 'loop 4', 'loop 0.5' set a loop in beats. 'loop 10ms' set a loop in ms. 'loop 200%' multiply by 2 the size of the loop. 'loop 50%' divides by 2. 'loop' alone set a loop at the actual position with the same beat size as the last set loop."
            },
            "loop_adjust":
            {
                "description": "use the jogwheel to adjust the loop.. loop_adjust 'move', loop_adjust 'out', loop_adjust 'in' activate a specific loop adjust mode. loop_adjust -1, loop_adjust +1 emulate moving the jog when loop adjust is active"
            },
            "loop_back":
            {
                "description": "When loop back mode is enabled, starting a loop sets the end point of the loop, looping what you just heard. When disabled, starting a loop sets the start point of the loop."
            },
            "loop_button":
            {
                "description": "one-button smart loop: Set the loop in on the first press, set the loop out on second press, remove the loop on third press."
            },
            "loop_color":
            {
                "description": "query or set the color of a saved loop. Query example: loop_color 1. Set example: loop_color 1 'yellow'"
            },
            "loop_delete":
            {
                "description": "'loop_delete 1' Delete the saved loop in slot 1"
            },
            "loop_double":
            {
                "description": "doubles the length of the loop."
            },
            "loop_exit":
            {
                "description": "remove the loop."
            },
            "loop_half":
            {
                "description": "halves the length of the loop."
            },
            "loop_in":
            {
                "description": "if not in loop, set the beginning of a loop. if in loop, jump back to the beginning of the loop."
            },
            "loop_length":
            {
                "description": "change the length of the loop. 'loop_length 15ms' set the length in ms, 'loop_length 0.5' set the length in beats, 'loop_length +100%' set the length in percentage of the actual length."
            },
            "loop_load":
            {
                "description": "'loop_load 1' Load the saved loop from slot 1. 'loop_load \"myloop\"' Load saved loop named \"myloop\""
            },
            "loop_load_prepare":
            {
                "description": "'loop_load_prepare 1' Activate/Deactivate the saved loop in slot 1 without jumping to the start point. 'loop_load_prepare \"myloop\"' Activate/Deactivate stored loop named \"myloop\" without jumping to the start point"
            },
            "loop_move":
            {
                "description": "move the loop without changing its length. 'loop_move +10ms' set the distance in ms, 'loop_move +2' set the distance in beats, 'loop_move +50%' set the distance in percentage of the actual length."
            },
            "loop_options":
            {
                "description": "Show some options about loops"
            },
            "loop_out":
            {
                "description": "if not in loop, set the deck in loop, starting from the last set loop_in point or stutter point. if in loop, exit the loop."
            },
            "loop_pad":
            {
                "description": "Use 'loop_pad 1' to 'loop_pad 8' to trigger a loop of predefined length, depending on loop_pad_page and loop_pad_mode"
            },
            "loop_pad_mode":
            {
                "description": "Cycle through the different loop modes for use with loop_pad. 1=On/Off 2=Hold 3=Roll"
            },
            "loop_pad_page":
            {
                "description": "Cycle through the different lengths of loops for use with loop_pad"
            },
            "loop_position":
            {
                "description": "Get relative position in loop (from 0% to 100%)"
            },
            "loop_roll":
            {
                "description": "\"loop_roll 0.25\" for 1/4th beat loop roll. \"loop_roll video\" to toggle video loop roll on or off"
            },
            "loop_roll_mode":
            {
                "description": "If loop roll mode is active, when the loop exits, the song continues from the position it should have been if no looping had been done"
            },
            "loop_save":
            {
                "description": "'loop_save 1' Save current loop in saved loop slot 1. 'loop_save \"myloop\"' Save current loop and name it \"myloop\""
            },
            "loop_select":
            {
                "description": "set the loop size (or default loop size if no loop is active). If no parameter is provided, a popup list of loop values to choose from will be displayed."
            },
            "pioneer_loop":
            {
                "description": "TODO"
            },
            "pioneer_loop_in":
            {
                "description": "TODO"
            },
            "pioneer_loop_out":
            {
                "description": "TODO"
            },
            "reloop":
            {
                "description": "jump to the loop_in point."
            },
            "reloop_exit":
            {
                "description": "if in loop, remove the loop. otherwise, reactivate the last used loop. Highlights when a loop had been used"
            },
            "repeat_song":
            {
                "description": "When active, song will restart from beginning when finished"
            },
            "saved_loop":
            {
                "description": "'saved_loop 1' Load the saved loop in slot 1 or set if it doesn't exist. 'saved_loop \"myloop\"' Load saved loop named \"myloop\" or set if it doesn't exist"
            },
            "saved_loop_autotrigger":
            {
                "description": "'saved_loop_autotrigger 1' Activate/Deactivate auto-trigger of loop when the play position arrives at the saved loop"
            },
            "saved_loop_display":
            {
                "description": "Show information about a saved loop based on the savedLoopDisplay config option.. Example: 'saved_loop_display 1'. Can also be used to modify the savedLoopDisplay option by using +1 or -1 as parameter: 'saved_loop_display +1'"
            },
            "saved_loop_prepare":
            {
                "description": "'saved_loop_prepare 1' Activate/Deactivate the saved loop in slot 1 without jumping to the start point or set if it doesn't exist. 'saved_loop_prepare \"myloop\"' Activate/Deactivate stored loop named \"myloop\" without jumping to the start point or set if it doesn't exist"
            },
            "slicer":
            {
                "description": "\"slicer 1\" to \"slicer 8\" for 8 slicer buttons. \"slicer 1 'hold'\" to hold the current position on first activate. \"slicer 'length' +1\" to increase length. \"slicer 'step' +1\" to increase step size. \"slicer video\" to toggle video slicer on or off"
            }
        },
        "macro":
        {
            "macro_play":
            {
                "description": "playback a previously recorded macro"
            },
            "macro_record":
            {
                "description": "Start or stop recording a macro"
            }
        },
        "pads":
        {
            "pad":
            {
                "description": "activate the ith pad from the current pad page"
            },
            "pad_bank2":
            {
                "description": "Switch between showing pads 1-8 or 9-16 on skins that support it"
            },
            "pad_button_color":
            {
                "description": "returns the color of the ith pad as should be used on a controller button (changing the color for standby/active/pressed according to the controller's RGB capability).. if the pad is active and has no color, white is returned.. if the pad is inactive and has a color, and the controller support full RGB pads, a dimmed color is returned.. if the pad is active and has a color, and the controller doesn't support full RGB pads, the color is blinking."
            },
            "pad_color":
            {
                "description": "return the color of the ith pad (without auto-dim)"
            },
            "pad_edit":
            {
                "description": "edit the current pads page"
            },
            "pad_has_16pads":
            {
                "description": "Returns true when a controller is connected with a 4x4 pad layout"
            },
            "pad_has_action":
            {
                "description": "TODO"
            },
            "pad_has_color":
            {
                "description": "TODO"
            },
            "pad_has_menu":
            {
                "description": "TODO"
            },
            "pad_has_param":
            {
                "description": "TODO"
            },
            "pad_has_pressure":
            {
                "description": "TODO"
            },
            "pad_menu":
            {
                "description": "open the menu for this pad page"
            },
            "pad_page":
            {
                "description": "Syntax: 'pad_page 1' to activate a the first page, 'pad_page 1 hotcues' to override the default for a page, 'pad_page btn1' for first button (that could be page 1 or page 5 depending on shift), 'pad_page' to show the dropdown menu",
                "alias": "pad_pages"
            },
            "pad_page_select":
            {
                "description": "Select the pad page for this slot",
                "alias": "pad_page_favorite_select"
            },
            "pad_param":
            {
                "description": "change the param 1 of the pads"
            },
            "pad_param2":
            {
                "description": "change the param 2 of the pads"
            },
            "pad_param_visible":
            {
                "description": "TODO"
            },
            "pad_pressure":
            {
                "description": "change the pressure applied on the ith pad"
            },
            "pad_pushed":
            {
                "description": "returns true if the pad is pushed (useful for custom color actions not using auto-dim)"
            },
            "padfx":
            {
                "description": "Activate/deactivate named effect with a single key. Effect parameters can be specified as well.. 'padfx \"echo\" 40% 90%' to start/stop the echo effect with first parameter at 40% and second parameter at 90%. When the effect is stopped, the parameters return to their original values.. 'padfx \"echo\" 40% 90% smart_pressed' smart_pressed works as a toggle when pressing the button shortly, or as a temporary while holding the button pressed. 'padfx \"echo\" 40% 90% \"TRAIL:on\"' after the sliders, it is possible to add strings to disable or enable switch parameters by defining their name, a colon and \"on\" to enable or \"off\" to disable. 'padfx \"echo out\" 80% \"solostem:vocal\"' as the last parameter, you can add solostem:stemname to only let that stem be audible while applying the effect. 'padfx \"echo out\" \"mutestem:rhythm\"' as the last parameter, you can add mutestem:stemname to mute that stem while applying the effect. 'padfx \"reverb\" \"stemfx:vocal\"' as the last parameter, you can add stemfx:stemname to apply the effect only to that stem (other stems will continue playing normally).  stem names can be Vocal,HiHat,Bass,Instru,Kick,Melody,Rhythm,MeloVocal,MeloRhythm"
            },
            "padfx_single":
            {
                "description": "Same as padfx, but turns off the previous padfx before activating the current effect"
            },
            "padshift":
            {
                "description": "the 'pad' action automatically change action on shift, but if you want to manually force the use of the shift action, you can use padshift instead"
            },
            "padshift_button_color":
            {
                "description": "the 'pad_button_color' action automatically change action on shift, but if you want to manually force the use of the shift action, you can use padshift_button_color instead"
            },
            "padshift_pressure":
            {
                "description": "the 'pad_pressure' action automatically change action on shift, but if you want to manually force the use of the shift action, you can use padshift_pressure instead"
            }
        },
        "pitch":
        {
            "backspin":
            {
                "description": "Do a backspin. It is possible to specify the length: 'backspin 5000ms' or 'backspin 4bt'"
            },
            "brakespeed":
            {
                "description": "vinyl brake speed, the larger, the longer it takes for the record to get from playing to stopped"
            },
            "get_pitch":
            {
                "description": "Get the pitch from -100% to +100%, centered on 0%"
            },
            "get_pitch_value":
            {
                "description": "Get the pitch from 0% to 200%, centered on 100%"
            },
            "get_pitch_zero":
            {
                "description": "Is true if the pitch is zero, with an optional precision parameter: 'get pitch_zero 5%' (the % is relative to the pitch range. Use \"get pitch_zero 'absolute' 0.1%\" to use absolute precision)"
            },
            "master_tempo":
            {
                "description": "activate/deactivate the master tempo (to make the pitch slider change the speed of the song, but keep the original key of the song)."
            },
            "pitch":
            {
                "description": "Set the pitch of the deck. Without parameters it can be assigned to sliders. Used with a number, it gives the position on the slider (and therefore account for pitch_range). ('pitch 0.25' set pitch at -10% if pitch range is 20%). Used with a percent it gives an absolute position.  'pitch 112%' set pitch at +12%. Relative values are possible too. 'pitch +0.1%', 'pitch +0.1 bpm'. When used with 'bpm', the pitch is set to match the bpm. 'pitch 130 bpm' set pitch to match 130 bpm",
                "alias": "pitch2 | pitch2_slider | pitch_slider"
            },
            "pitch_bend":
            {
                "description": "slow down or speed up the song: 'pitch_bend +3%'. you can make the bend to increase slowly by specifying a second time parameter: 'pitch_bend +1% 500ms' will start at +1% and will double every 500ms.",
                "examples": "pitch_bend +3% | pitch_bend +1% 500ms"
            },
            "pitch_lock":
            {
                "description": "when Pitch Lock is on, moving the pitch slider on one deck will move the slider on the other deck to keep the sync",
                "alias": "pitchlock"
            },
            "pitch_motorized":
            {
                "description": "TODO"
            },
            "pitch_range":
            {
                "description": "set the range for the pitch slider. 'pitch_range 12%' set the range from -12% to +12%. . 'pitch_range +1' scrolls through the default pitch ranges. 'pitch_range \"12,16,25\" +1' scrolls through the provided list of pitch ranges.. 'pitch_range +1 deck' changes the pitch range only for the specific deck",
                "examples": "pitch_range 12% | pitch_range +1 | pitch_range \"12,16,25\" +1 | pitch_range +1 deck"
            },
            "pitch_relative":
            {
                "description": "set the pitch of the deck, to be used by hardware controllers if you prefer the change to be relative to the software pitch position"
            },
            "pitch_reset":
            {
                "description": "Slowly brings the pitch back to 0%. You can specify the speed in % per second (default uses the pitchResetSpeed option): 'pitch_reset 5%'. You can also specify the speed in ms or beats: 'pitch_reset 500ms' or 'pitch_reset 4bt'"
            },
            "pitch_zero":
            {
                "description": "Set pitch to 0% (normal playing speed). Use 'pitch_zero \"center\"' on controllers that send a message when the pitch slider is at the center. This prevents unwanted behavior in gradual or relative mode."
            },
            "startupspeed":
            {
                "description": "vinyl startup speed, the larger, the longer it takes for the record to get from stopped to playing"
            }
        },
        "plugins":
        {
            "effect_3slots_layout":
            {
                "description": "Change between the 1-slot and 3-slots layout for effects"
            },
            "effect_active":
            {
                "description": "Activate/deactivate the effect on a specific slot",
                "alias": "effect_activate",
                "examples": "effect_active 1 'flanger' on | effect_active 1"
            },
            "effect_arm_active":
            {
                "description": "Activate the effect selected using effect_arm_select on the deck selected using effect_arm_deck"
            },
            "effect_arm_beats":
            {
                "description": "Change the speed of the effect selected using effect_arm_select on the deck selected using effect_arm_deck"
            },
            "effect_arm_bpm":
            {
                "description": "Get the bpm of the deck selected using effect_arm_deck"
            },
            "effect_arm_deck":
            {
                "description": "For controllers with a deck selection switch for effects, select the deck effects will be activated on using effect_arm_active. Use 'effect_arm_deck single' to allow only one deck at a time to be armed. Use 'effect_arm_deck master' to select master instead of a deck. 'sampler', 'mic', and 'aux' also supported"
            },
            "effect_arm_select":
            {
                "description": "For controllers with a effect selection switch, select the effect that will be activated using effect_arm_active"
            },
            "effect_arm_slider":
            {
                "description": "Move the effect parameter of the effect selected using effect_arm_select on the deck selected using effect_arm_deck. Use \"effect_arm_slider 1 2\" to move the second slider of the first slot"
            },
            "effect_arm_slider_label":
            {
                "description": "Get the effect parameter label of the effect selected using effect_arm_select on the deck selected using effect_arm_deck.. Use 'effect_arm_slider_label 1 short' to get the short label"
            },
            "effect_arm_slider_name":
            {
                "description": "Get the effect parameter name of the effect selected using effect_arm_select on the deck selected using effect_arm_deck.. Use 'effect_arm_slider_name 1 short' to get the short label"
            },
            "effect_arm_slider_text":
            {
                "description": "Get the effect parameter text of the effect selected using effect_arm_select on the deck selected using effect_arm_deck."
            },
            "effect_arm_slot":
            {
                "description": "Toggle if a slot will be activated by using effect_arm_active"
            },
            "effect_arm_stem":
            {
                "description": "Select/unselect a stem to be used with \"stems\" as slot for effect_ actions. Accepted stem names are Vocal, HiHat, Bass, Instru, Kick. They can be combined using \"+\""
            },
            "effect_bank_load":
            {
                "description": "load the effects in deck fx slots 1 to 6 from the bank specified by the parameter"
            },
            "effect_bank_save":
            {
                "description": "save the effects in deck fx slots 1 to 6 to the bank specified by the parameter"
            },
            "effect_beats":
            {
                "description": "set the beat parameter for certain effects"
            },
            "effect_beats_all":
            {
                "description": "set the beat parameter for 1, 3 or 6 slots depending on skin6FxLayout and skin3FxLayout settings"
            },
            "effect_bpm_deck":
            {
                "description": "set/get a custom bpm for plugins activated on this deck. Use 'effect_bpm_deck off' to reset and use the bpm of the song or 'effect_bpm_deck 120' to set it to 120 bpm"
            },
            "effect_bpm_deck_tap":
            {
                "description": "tap a custom bpm for plugins activated on this deck. Use 'effect_bpm_deck off' to reset and use the bpm of the song"
            },
            "effect_button":
            {
                "description": "'effect_button 1 2' button 2 on slot 1. 'effect_button 2' button 2 on slot 1"
            },
            "effect_clone":
            {
                "description": "Load into this deck all 3 slots from the current left or right deck"
            },
            "effect_colorfx":
            {
                "description": "'effect_colorfx 1 \"echo\"' to use echo on custom color fx slot 1 (up to 4 custom slots available)",
                "examples": "effect_colorfx 1 \"echo\""
            },
            "effect_colorslider":
            {
                "description": "Control the effect from center position off, to full on either left or right"
            },
            "effect_command":
            {
                "description": "send a command to this effect"
            },
            "effect_disable_all":
            {
                "description": "'deck 1 effect_disable_all' Disables all effects on deck 1. 'deck master effect_disable_all' Disables all master effects. 'effect_disable_all sampler' Disables all sampler effects. 'aux' or 'mic' can be used for mic or aux effects"
            },
            "effect_dock_gui":
            {
                "description": "dock/undock this effect's control window"
            },
            "effect_has_beats":
            {
                "description": "TODO"
            },
            "effect_has_button":
            {
                "description": "'effect_has_slider 1 2 on' -> returns true if there is a second button on slot 1"
            },
            "effect_has_length":
            {
                "description": "TODO"
            },
            "effect_has_slider":
            {
                "description": "effect_has_slider 1 2 on -> returns true if there is a second slider on slot 1. effect_has_slider 1 -> returns true if there is a first slider on slot 0"
            },
            "effect_mixfx":
            {
                "description": "Associate an effect with the crossfader"
            },
            "effect_mixfx_activate":
            {
                "description": "Toggle mix fx on or off. Use effect_mixfx_select to select"
            },
            "effect_mixfx_select":
            {
                "description": "Select the mix fx when moving the crossfader"
            },
            "effect_releaseslider":
            {
                "description": "Control the effect release specific slider"
            },
            "effect_releaseslider_active":
            {
                "description": "Control the effect release specific slider and auto activate the effect"
            },
            "effect_select":
            {
                "description": "effect_select 2 \"echo\" -> select effect echo in slot 2. effect_select 1 -1 -> select previous effect in slot 1. effect_select +1 -> select next effect in slot 1. effect_select -> show popup window for slot 1. effect_select 1 -> show popup window for slot 1. effect_select 1 0.2 -> select the 2/10th effect from the list in slot 1. effect_select \"audioonlyvisualisation\" -> select visualisation used when song has no video. effect_select deactivates the previous plugin in the specified slot"
            },
            "effect_select_multi":
            {
                "description": "effect_select_multi 2 \"echo\" -> select effect echo in slot 2. effect_select_multi 1 -1 -> select previous effect in slot 1. effect_select_multi +1 -> select next effect in slot 1. effect_select_multi -> show popup window for slot 1. effect_select_multi 1 -> show popup window for slot 1. effect_select_multi 1 0.2 -> select the 2/10th effect from the list in slot 1. effect_select_multi \"video\" -> select effect in the video effect slot. effect_select_multi does not deactivate the previous plugin in the specified slot"
            },
            "effect_select_popup":
            {
                "description": "Same as effect_select, but shows the selection drop-down temporarily for easier selection"
            },
            "effect_select_toggle":
            {
                "description": "Same as effect_select, but will turn on the new effect if the previous effect was on"
            },
            "effect_show_gui":
            {
                "description": "show the control window for this effect"
            },
            "effect_slider":
            {
                "description": "Move the n-th slider on the given effect. \"effect_slider 1 2 50%\" : Set slider id 2 on slot 1 to 50%. \"effect_slider 1 0%\" : set slider id 1 on slot 1 to 0%",
                "alias": "effect_slider_slider",
                "examples": "effect_slider | effect_slider 1 2 50% | effect_slider 1 0%"
            },
            "effect_slider_active":
            {
                "description": "move a slider and activate the effect as long as the mouse is down",
                "alias": "effect_slider_activate"
            },
            "effect_slider_reset":
            {
                "description": "return this plugin slider to its default value"
            },
            "effect_slider_skip_length":
            {
                "description": "Move the n-th slider on the given effect, excluding a length slider if present. \"effect_slider_skip_length 1 2 50%\" : Set slider 2 (excluding length) on slot 1 to 50%. \"effect_slider_skip_length 1 0%\" : set slider 1 (excluding length) on slot 1 to 0%"
            },
            "effect_stems":
            {
                "description": "Apply effects only to the selected stems. 'effect_stems vocal on'. Stems are Vocal,HiHat,Bass,Instru,Kick,Melody,Rhythm,MeloVocal or MeloRhythm"
            },
            "effect_stems_color":
            {
                "description": "Get the color for the effect_stems button"
            },
            "effects_used":
            {
                "description": "Active when there are any effects activated. Use \"effects_used 'deck'\" to get the effects on the selected deck, or \"effects_used 'master'\" to get effects activated on master."
            },
            "get_effect_button_count":
            {
                "description": "get the number of buttons on this effect"
            },
            "get_effect_button_name":
            {
                "description": "get the name of the xth button of the currently selected effect"
            },
            "get_effect_button_shortname":
            {
                "description": "get the short name of the xth button of the currently selected effect"
            },
            "get_effect_name":
            {
                "description": "get the name of the currently selected effect"
            },
            "get_effect_slider_count":
            {
                "description": "get the number of slider on this effect"
            },
            "get_effect_slider_default":
            {
                "description": "returns the default value for this slider"
            },
            "get_effect_slider_label":
            {
                "description": "get the label to display under this slider control"
            },
            "get_effect_slider_label_full":
            {
                "description": "get the label to display under this slider control"
            },
            "get_effect_slider_name":
            {
                "description": "get the name of the xth slider of the currently selected effect"
            },
            "get_effect_slider_shortname":
            {
                "description": "get the shortname to display under this slider control"
            },
            "get_effect_slider_text":
            {
                "description": "get the full text associated with this slider control"
            },
            "get_effect_string":
            {
                "description": "get the text displayed by this effect. Some effects allow setting text as well",
                "alias": "effect_string"
            },
            "get_effect_string_name":
            {
                "description": "get the label to display for this effect"
            },
            "get_effect_title":
            {
                "description": "get the title of the currently selected effect"
            },
            "get_effects_used":
            {
                "description": "Returns the number of effects currently active"
            },
            "get_nb_multicam":
            {
                "description": "TODO"
            },
            "get_video_fx_slider_label":
            {
                "description": "get the text to display under this slider control"
            },
            "get_videofx_name":
            {
                "description": "get the name of the currently selected video effect"
            },
            "get_videotrans_name":
            {
                "description": "get the name of the currently selected video transition"
            },
            "is_releasefx":
            {
                "description": "query if this effect is in the release effect slot"
            },
            "pluginsongpos":
            {
                "description": "TODO"
            },
            "show_pluginpage":
            {
                "description": "show or hide the plugin control windows in the browser area"
            },
            "video_fx":
            {
                "description": "activate/deactivate the selected video effect"
            },
            "video_fx_button":
            {
                "description": "push the n-th button of the video effect plugin"
            },
            "video_fx_clear":
            {
                "description": "deactivate all the active video effects"
            },
            "video_fx_select":
            {
                "description": "select a video effect plugin. you can specify by name ('video_fx_select \"my_plugin\"'), relative ('video_fx_select +1') or without parameters to open a popup window listing the available plugins"
            },
            "video_fx_slider":
            {
                "description": "move the n-th slider of the video effect plugin",
                "alias": "video_fx_slider_slider"
            },
            "video_source":
            {
                "description": "activate video if not active yet, and open the shader selection dialog if shader is the source"
            },
            "video_source_select":
            {
                "description": "select the plugin used for video source. you can specify by name ('video_source_select \"webcam\"'), relative ('video_source_select +1') or without parameters to open a popup window listing the available plugins"
            },
            "video_transition_button":
            {
                "description": "push the n-th button of the video transition plugin"
            },
            "video_transition_select":
            {
                "description": "select the plugin used for video transitions. you can specify by name ('video_transition_select \"my_plugin\"'), relative ('video_transition_select +1') or without parameters to open a popup window listing the available plugins"
            },
            "video_transition_slider":
            {
                "description": "move the n-th slider of the video transition plugin",
                "alias": "video_transition_slider_slider"
            }
        },
        "poi":
        {
            "adjust_cbg":
            {
                "description": "adjust the beat grid. 'adjust_cbg +2' moves the start bar from 4:4. 'adjust_cbg +10%' moves the actual bars."
            },
            "beat_tap":
            {
                "description": "tap on a few beats to set a new bpm for the song if the application didn't got it right on the first time."
            },
            "edit_bpm":
            {
                "description": "open the BPM Editor to edit the bpm and beat grid"
            },
            "edit_poi":
            {
                "description": "open the POI Editor to edit the cue points, and other points of interest"
            },
            "goto_mixpoint":
            {
                "description": "Jump to the specified mix point (\"StartTempo\", \"EndTempo\", \"StartCut\", \"EndCut\", \"StartFade\", \"EndFade\", \"StartSound\", \"EndSound\"). Example: goto_mixpoint \"StartCut\""
            },
            "reanalyze":
            {
                "description": "reanalyze bpm etc... for the file loaded on the deck. 'reanalyze multi' can be used to scan for multiple bpm's"
            },
            "set_bpm":
            {
                "description": "set the bpm of the song to the set value: 'set_bpm 129.3', or relative to the actual value: 'set_bpm 50%'."
            },
            "set_firstbeat":
            {
                "description": "moves the first beat to the current position, adjusting the beat-grid"
            },
            "set_loadpoint":
            {
                "description": "Set the point where the track will start when loaded"
            },
            "set_mixpoint":
            {
                "description": "Move the specified mix point to the current position (\"StartTempo\", \"EndTempo\", \"StartCut\", \"EndCut\", \"StartFade\", \"EndFade\", \"StartSound\", \"EndSound\"). Example: set_mixpoint \"StartTempo\""
            }
        },
        "prelisten":
        {
            "prelisten":
            {
                "description": "Pre-listen the selected track",
                "alias": "preview"
            },
            "prelisten_options":
            {
                "description": "Show a context menu with the prelisten player options"
            },
            "prelisten_output":
            {
                "description": "Set this deck to be used for the prelisten player. Example: \"deck 1 prelisten_output\", or to put it back to default: \"prelisten_output 'auto'\""
            },
            "prelisten_pos":
            {
                "description": "move the position of the prelisten player"
            },
            "prelisten_stop":
            {
                "description": "Stop the prelisten player"
            }
        },
        "record":
        {
            "broadcast":
            {
                "description": "start or stop to broadcast. Optionally add parameter to specify \"video\", \"direct\", \"server\" or \"podcast\". Without parameters it will use the last used mode."
            },
            "broadcast_message":
            {
                "description": "set or get the broadcast message."
            },
            "record":
            {
                "description": "start recording the session."
            },
            "record_config":
            {
                "description": "open the record configuration panel"
            },
            "record_cut":
            {
                "description": "cut the current recording to a new file (or new track if recording to CD)"
            },
            "record_vu":
            {
                "description": "show the volume of what's being recorded"
            }
        },
        "sampler":
        {
            "get_sample_color":
            {
                "description": "get the color for the specified sample (with auto-dim)"
            },
            "get_sample_info":
            {
                "description": "get additional information about the sample, such as 'get_sample_info 1 fullpath'. In addition to the regular column names, 'group' is also supported, and 'length' returns beat values for loops"
            },
            "get_sample_name":
            {
                "description": "get the name of the specified sample",
                "alias": "get_sample_slot_name"
            },
            "get_sampler_bank":
            {
                "description": "get the name of the currently loaded sampler bank"
            },
            "get_sampler_bank_count":
            {
                "description": "get the number of sample banks"
            },
            "get_sampler_bank_id":
            {
                "description": "get the number of the currently loaded sampler bank"
            },
            "get_sampler_count":
            {
                "description": "get the number of slots in the current sampler bank"
            },
            "get_sampler_slot":
            {
                "description": "get the number of the sampler slot that currently has the focus"
            },
            "sampler_abort_rec":
            {
                "description": "cancel the recording and delete the sample file"
            },
            "sampler_assign":
            {
                "description": "'sampler_assign 1 \"path to vdjsample\"' adds the sample to sample slot 1. (For use in drag&drop in pad page)"
            },
            "sampler_bank":
            {
                "description": "Select a new sampler bank. Can be called either by name (sampler_bank \"birthday\"), by number (sampler_bank 2) or can be assigned to a rotary knob (sampler_bank) or buttons (sampler_bank +1)"
            },
            "sampler_color":
            {
                "description": "get the color of the sample on this slot if it has one. The sample number takes the sampler_pad_page into account, so should be used in combination with sampler_pad"
            },
            "sampler_edit":
            {
                "description": "edit the given sample in the SampleEditor"
            },
            "sampler_group_color":
            {
                "description": "get the color of a sampler group"
            },
            "sampler_group_mute":
            {
                "description": "mute/unmute a sample group. You can specify the group by name, or by group index"
            },
            "sampler_group_name":
            {
                "description": "get the name of a sampler group"
            },
            "sampler_group_volume":
            {
                "description": "change the volume of all the samples in the give group. You can specify the group by name, or by group index"
            },
            "sampler_has_group":
            {
                "description": "returns true if the specified group (specified by name or by index) exists in the current samplebank"
            },
            "sampler_load_to_deck":
            {
                "description": "Load the sample from the selected slot to the deck"
            },
            "sampler_loaded":
            {
                "description": "'sampler_loaded 1' returns true when there is a sample loaded in slot 1, otherwise returns false"
            },
            "sampler_loop":
            {
                "description": "use 'sampler_loop -1' or 'sampler_loop +1' to change the length of a playing sample. use 'sampler_loop \"current\" 1' to set the sample to loop for 1 beat or 'sampler_loop 1 1' to set sample 1 to 1 beat loop. use 'sampler_loop \"current\" 0.5 \"play\" while_pressed' to loop the sample as long as long as the button is pressed for 0.5 beats"
            },
            "sampler_mode":
            {
                "description": "set the global trigger mode for the sampler: \"sampler_mode 'on/off'\", 'hold', 'stutter' or 'unmute'. set trigger mode for a specific sample: \"sampler_mode 1 'on/off'\" to set sample 1 mode or \"sampler_mode 1 +1\" to cycle",
                "alias": "sampler_rapidfire"
            },
            "sampler_mute":
            {
                "description": "mute/unmute this sample"
            },
            "sampler_options":
            {
                "description": "popup the sample menu.. can also be used with 'sampler_options \"locked\"' or 'sampler_options \"stemswap\"' to change the bank's settings."
            },
            "sampler_output":
            {
                "description": "Select sampler output channel. 'deck master sampler_output', 'sampler_output \"headphones\"', 'deck 1 sampler_output', 'sampler_output \"popup\"'"
            },
            "sampler_pad":
            {
                "description": "'sampler_pad 1' triggers the sample in slot 1, based on the play mode for that sample slot"
            },
            "sampler_pad_page":
            {
                "description": "show next page of samples if the bank has more than 8 samples"
            },
            "sampler_pad_shift":
            {
                "description": "'sampler_pad_shift 1' stop sample when playing, delete sample otherwise"
            },
            "sampler_pad_volume":
            {
                "description": "'sampler_pad_volume 1' sets the volume of the sample on the first pad. 'sampler_pad_volume \"siren\"' sets the volume of the sample 'siren.vdjsample'."
            },
            "sampler_pfl":
            {
                "description": "Select if the sampler is sent to the headphones. (can be used with a slider or a % to specify the volume: 'sampler_pfl 75%')"
            },
            "sampler_play":
            {
                "description": "play the selected sample. syntax 'sampler_play' plays the default sample. . 'sampler_play 4' plays the fourth sample."
            },
            "sampler_play_stop":
            {
                "description": "play the selected sample if it's not already playing, or stop it if it's already playing."
            },
            "sampler_play_stutter":
            {
                "description": "play the selected sample. if already playing, restart from begining."
            },
            "sampler_position":
            {
                "description": "get the current position of the sample"
            },
            "sampler_rec":
            {
                "description": "On first press, start to record a new sample. On second press, stop to record. Use 'sampler_rec \"mic\"' to record a sample from microphone, or 'sampler_rec \"master\"' to record from master output. If the deck is on loop, a loop sample will immediately be created. If the deck is playing, it will record what's playing until the stop. If the deck is paused, it sets the 'entry point', and the second push will set the 'exit point' and use the deck's file between those two points.. 'sampler_rec 1' or 'sampler_rec 1 \"mic\"' will store the sample in the first slot of the \"Record\" sample bank, so that it can be used immediately after recording"
            },
            "sampler_rec_delete":
            {
                "description": "delete a recording from the \"Recordings\" bank. \"sampler_rec_delete 3\" would delete the sample previously recorded using \"sampler_rec 3\""
            },
            "sampler_select":
            {
                "description": "select which sample is the default sampler slot for that deck. syntax 'sampler select 5' selects the fifth sampler slot. 'sampler select +1' scrolls through the sampler slots. 'sampler select' open a popup menu to select the new default sampler slot.",
                "alias": "sampler_default"
            },
            "sampler_start_rec":
            {
                "description": "start to record (from the deck, or from mic or master if specified) in order to create a new sample file"
            },
            "sampler_stop":
            {
                "description": "stop the selected sample. syntax 'sampler_stop' stops the default sample. 'sampler_stop 4' stops the fourth sampler slot. 'sampler_stop all' stops all samples."
            },
            "sampler_stop_rec":
            {
                "description": "stop the recording and save the result in a sample file"
            },
            "sampler_used":
            {
                "description": "check if a sample is playing (or if used with 'sampler_used 4' check if exactly 4 samples are playing)",
                "alias": "get_sampler_used"
            },
            "sampler_velocity":
            {
                "description": "TODO"
            },
            "sampler_volume":
            {
                "description": "'sampler_volume' sets the volume of the sample that has the focus, on the selected deck.. 'sampler_volume 1' sets the volume of the sample in slot 1 in the current bank.. 'sampler_volume \"siren\"' sets the volume of the sample 'siren.vdjsample'."
            },
            "sampler_volume_master":
            {
                "description": "'sampler_volume_master' sets the master volume of the sampler"
            },
            "sampler_volume_nogroup":
            {
                "description": "sets the volume of the sample without changing the volume of other samples in the same group"
            },
            "scratchbank_assign":
            {
                "description": "TODO"
            },
            "scratchbank_edit":
            {
                "description": "TODO"
            },
            "scratchbank_load":
            {
                "description": "TODO"
            },
            "scratchbank_load_to_deck":
            {
                "description": "TODO"
            },
            "scratchbank_unload":
            {
                "description": "Unload the song previously loaded using scratchbank_load_to_deck from deck and load back the last song",
                "alias": "sampler_unload_from_deck"
            }
        },
        "sandbox":
        {
            "can_sandbox":
            {
                "description": "returns true if virtualdj can be sandboxed.. sandbox cannot be activated while you have effects or samples active, or video, or if you're scratching, or if you have more than one deck playing with the volume up."
            },
            "sandbox":
            {
                "description": "activate/deactivate sandbox mode.. in sandbox mode, the master output continues to play what it was playing without being affected by your actions, and you can move both decks to whatever position you want, in order to prelisten your upcomming mix."
            }
        },
        "sync":
        {
            "auto_bpm_transition":
            {
                "description": "When pressed, the bpm of the song is gradually moved to the bpm of the other deck while keeping both songs at the same bpm. When smartPlay or autoBPMMatch are on, it will move to the bpm of the other deck at normal speed. When using parameter 'source_original', 'target_original' or 'target_current' you can force which bpm it will transition to"
            },
            "auto_bpm_transition_options":
            {
                "description": "Enable/Disable certain features of the auto_bpm_transition.. First parameter can be 'length', 'loop', 'stems', 'master_tempo', 'autostart'. When selecting stems to disable, use 'auto_bpm_transition_options stems vocal' for example"
            },
            "auto_sync_settings":
            {
                "description": "Set some pre-defined values for the main automatic sync settings (auto match bpm, auto match key, auto sync, auto pitch lock) depending on the skin category"
            },
            "beatlock":
            {
                "description": "When beatlock is activated, the songs are kept synchronized, even when moving the pitch, scratching, etc..."
            },
            "get_bpm_match":
            {
                "description": "Returns 0.5 when bpm's are synchronized"
            },
            "is_sync":
            {
                "description": "on when tracks are synchronized (bpm and phase while playing, bpm when not playing)"
            },
            "match_bpm":
            {
                "description": "set the pitch to match the BPM of the other deck."
            },
            "match_gain":
            {
                "description": "set the gain to match the other deck."
            },
            "phrase_sync":
            {
                "description": "shift by a number of beat to match the phrase of the other deck (default 4:4, but can specify 'phrase_sync 16' for example)"
            },
            "play_onbeat":
            {
                "description": "instantly synchronize the song with the other deck, using local beat information instead of the global beatgrid, but don't change the pitch."
            },
            "play_sync":
            {
                "description": "play the song instantly synchronized with the other deck."
            },
            "play_sync_onbeat":
            {
                "description": "instantly synchronize the song with the other deck, using local beat information instead of the global beatgrid.",
                "alias": "sync_nocbg"
            },
            "quantize_all":
            {
                "description": "Set all quantize options"
            },
            "smart_fader":
            {
                "description": "When smart fader is activated, songs are synchronized while using the crossfader, and the tempo moves toward the tempo of the song that is being faded into"
            },
            "sync":
            {
                "description": "smoothly synchronize the song with the other deck."
            },
            "sync_hint":
            {
                "description": "sync_hint 'pitch' returns true if the pitch should be matched. Then sync_hint 'phase' returns true if the phase should be synced"
            }
        },
        "text":
        {
            "countdown":
            {
                "description": "Count down to a specific date or time. Example: countdown '2025/01/01 00:00'. Second parameter can be used to optionally format the return value. Use %full, %HH, %MM, %SS, %DD"
            },
            "get_status":
            {
                "description": "get information about background tasks"
            },
            "get_text":
            {
                "description": "get some text. You can use the inverted apostrophe to query VDJScript results within the text: \"get text 'You are listening to `get loaded_song \"title\"` at `volume` volume.\".\. VDJScript returning booleans (buttons) will be displayed as \"on\" or \"off\".\. VDJScript returning values (sliders) will be displayed as a percentage.\. (you can also (but it's being deprecated in VDJ7) use % shortcuts for some common queries: \"get text 'you are listening to %title by %author'\")"
            },
            "stopwatch":
            {
                "description": "TODO"
            },
            "stopwatch_reset":
            {
                "description": "TODO"
            }
        },
        "timecode":
        {
            "get_hastimecode":
            {
                "description": "returns true if the current soundconfig includes some timecode inputs"
            },
            "get_timecode_quality":
            {
                "description": "TODO"
            },
            "invert_timecode":
            {
                "description": "Invert timecode control (for 1 timecode source, switch it through available decks, for 2 timecode sources, from 1 to 3, 2 to 4)"
            },
            "timecode_active":
            {
                "description": "Select if the deck is controlled by a timecode signal.. (note: You can use 'timecode_active x' where x is the turntable number, to assign the same turntable to control several decks at once: 'deck 1 timecode_active 1 on & deck 2 timecode_active 1 on')"
            },
            "timecode_bypass":
            {
                "description": "Use the timecode turntable as linein input"
            },
            "timecode_cd_mode":
            {
                "description": "Force timecode to CD mode (use when using a vinyl timecode on a cd or other digital device)"
            },
            "timecode_config":
            {
                "description": "Open the timecode config window"
            },
            "timecode_mode":
            {
                "description": "Set the timecode mode: 'smart', 'absolute', 'relative'."
            },
            "timecode_motor_enable":
            {
                "description": "Hybrid turntables that send midi messages to indicate if motor is enabled can use this"
            },
            "timecode_options":
            {
                "description": "Show some timecode options"
            },
            "timecode_pitch":
            {
                "description": "For controllers that send the pitch through midi, let the timecode engine know the pitch slider's position"
            },
            "timecode_reset_pitch":
            {
                "description": "Reset the \"software\" pitch to 100%, so that the deck pitch matches the turntable pitch exactly, and needle-drop is truly absolute"
            }
        },
        "video":
        {
            "has_video_mix":
            {
                "description": "return true if video output is using transition and video-crossfader with one or more video sources, false if it's playing audio-only and using a source plugin"
            },
            "is_audioonlyvisualisation":
            {
                "description": "return true if this deck has the audio only visualisation running on it"
            },
            "is_video":
            {
                "description": "return true if this deck has some video"
            },
            "leftvideo":
            {
                "description": "assign this deck to the left of the video crossfader: \"deck 3 leftvideo\" or \"leftvideo +1\" or \"leftvideo 'auto'\"."
            },
            "leftvideo_button":
            {
                "description": "simple button to control the left video source: \"deck 3 leftvideo_button\"."
            },
            "over_video":
            {
                "description": "force this deck's video output on the video master",
                "alias": "overvideo"
            },
            "rightvideo":
            {
                "description": "assign this deck to the right of the video crossfader: \"deck 3 rightvideo\" or \"rightvideo +1\" or \"rightvideo 'auto'\"."
            },
            "rightvideo_button":
            {
                "description": "simple button to control the right video source: \"deck 3 rightvideo_button\"."
            },
            "video":
            {
                "description": "open or close the video window"
            },
            "video_crossfader":
            {
                "description": "set the video crossfader"
            },
            "video_crossfader_auto":
            {
                "description": "move the video crossfader automatically according to which side is playing, cueing, scratching, etc..."
            },
            "video_crossfader_link":
            {
                "description": "link or unlink the video crossfader to the audio crossfader"
            },
            "video_delay":
            {
                "description": "set a delay between video or audio to synchronize output (in milliseconds)"
            },
            "video_fadetoblack":
            {
                "description": "activate/deactivate fade-to-black on volume sliders"
            },
            "video_level":
            {
                "description": "fade-to-black independent slider for the left or right video deck"
            },
            "video_output":
            {
                "description": "Show menu to select on which monitor to open the video output.. You can also specify a specific output: \"video_output 1\" to open video output on the first monitor. To just show or hide the output use \"video_output on\" or \"video_output off\". To toggle output, use \"video_output ? video_output off : video_output on\""
            },
            "video_transition":
            {
                "description": "Launch a transition from one video deck to the other.. You can specify the duration of the transition: 'video_transition 1000ms'. You can specify the direction of the transition: 'video_transition \"left\"' or 'video_transition \"left\" 1000ms'. You can specify the location to transition to using a percentage (or assign it to a slider): 'video_transition 50%' or 'video_transition 1000ms 50%'"
            }
        }
    }

}
