const vdjscript_list =
{
    "VdjBuild": "8709",
    "Items":
    {
        "flow":
        {
            "down":
            {
                "description": "execute different actions depending if the key if pressed or released: 'down ? action1 : action2'"
            },
            "isrepeat":
            {
                "description": "execute different actions depending if the key is being repeated or if it's the first message (on Windows, keyboard shortcuts are usually auto-repeated while held down): 'isrepeat ? nothing : goto_cue')"
            },
            "nothing":
            {
                "description": "Do nothing."
            },
            "up":
            {
                "description": "execute different actions depending if the key if pressed or released: 'up ? action1 : action2'"
            }
        },
        "param":
        {
            "blink":
            {
                "description": "turn on and off the LED, once per second.You can specify the speed: 'blink 1000ms' Speed can also be specified in number of beats: 'blink 1bt'.The time blinking can also be specified: 'blink 1bt 25%'"
            },
            "color":
            {
                "description": "color 'red' color \"#C08040\" color 0.8 0.5 0.25 color 75% 'red' (returns a dimmed red) color 0.66 (returns a gray)"
            },
            "color_mix":
            {
                "description": "Mix two colors based on an action in the third parameter color_mix white red `get_limiter`"
            },
            "constant":
            {
                "description": "Return the specified value Example: 'get constant 75%' always returns 75%",
                "alias": "get_constant"
            },
            "dim":
            {
                "description": "equivalent of \"constant 0.1\""
            },
            "fadeout":
            {
                "description": "'loop & fadeout 10000ms 3000ms' will return 100 % when loop is on, and fade out to 0% after 10 seconds in 3 seconds when loop turns off Alternatively, the action can be entered as the third parameter in backticks: 'fadeout 10000ms 3000ms `loop`'"
            },
            "false":
            {
                "description": "returns false",
                "alias": "no | off"
            },
            "param_1_x":
            {
                "description": "invert the value of the calling slider/encoder/button (calculate 1/x) 'param_1_x & effect slider'"
            },
            "param_add":
            {
                "description": "add the given value to the value of the calling slider/ encoder / button add the value of the first parameter with the value of the second parameter.Both parameters can be actions instead of values: 'param_add `get_var a` `get_var b`'"
            },
            "param_bigger":
            {
                "description": "check if the value of the calling slider/encoder/button is bigger than something: 'param_bigger 0 ? sampler loop 200% : sampler loop 50%' compare value of the first parameter with the value of the second parameter. Both parameters can be actions instead of values: 'param_bigger pitch pitch_slider'",
                "alias": "param_greater"
            },
            "param_cast":
            {
                "description": "cast the value of the previous query action into a new type: 'pitch_range & param_cast \"percentage\"'. Valid types are 'integer', 'float', 'percentage', 'ms', 'boolean', 'beats', 'text'. casting to text can also optionally limit the number of characters: 'get_browsed_song \"artist\" & param_cast \"text\" 5' to format a number as text with a specific number of digits: 'get_bpm & param_cast \"000\"' param_cast 'int_trunc' : provides the integer part of a number without rounding to the nearest integer param_cast 'frac' : provides the decimal part of a number. param_cast 'relative' and param_cast 'absolute' : change the parameter to be a relative or absolute value"
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
                "description": "Check if the value of the calling slider/encoder/button is equal to something To compare a string with the result of an action, use param_equal `action param` \"string\". For example: param_equal `get_browsed_song 'type'` \"audio\""
            },
            "param_invert":
            {
                "description": "invert the value of the calling slider/encoder/button (1-x): 'param_invert & pitch_slider'"
            },
            "param_lowercase":
            {
                "description": "change the text result of the previous element in the script into lowercase"
            },
            "param_make_discrete":
            {
                "description": "useful for smooth endless encoders, to make them discrete Example: 'param_make_discrete 0.1 & param_bigger 0 ? loop_move +100% : param_smaller 0 ? loop_move - 100%'"
            },
            "param_mod":
            {
                "description": "wrap the value of the calling slider/encoder if more than the given value"
            },
            "param_multiply":
            {
                "description": "multiply the value of the calling slider/encoder/button by the given value: 'param_multiply 300% & effect slider' The parameter can also be an action 'cue_pos 0 & param_multiply \"get_time total 1000\"'"
            },
            "param_pingpong":
            {
                "description": "transform the value of the calling slider/encoder from a linear scale to a forth-and-back scale"
            },
            "param_pow":
            {
                "description": "param_pow y : computes the power of the caller to the power of y. Can be 0.5 for calculating square root."
            },
            "param_smaller":
            {
                "description": "check if the value of the calling slider/encoder/button is smaller than something: 'param_smaller 0 ? sampler loop 200% : sampler loop 50%'"
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
                "description": "return true when the previous action turns to true only for the duration specified: 'is_using 'equalizer' & pulse 2000ms'"
            },
            "true":
            {
                "description": "returns true",
                "alias": "on | yes"
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
                "description": "repeat the actions every x ms as long as the key is pressed: 'repeat 1000ms & browser_scroll +1' (default is 500ms if no speed is specified. Second parameter can specify a delay before repeating the first time)"
            },
            "repeat_start":
            {
                "description": "Repeat an action at a specified interval: 'repeat_start 'myrepeatname' 1000ms 5 & browser_scroll +1' (first parameter is an identifier name, second parameter is the interval and the third optional parameter can specify a number of times to repeat). The first action will be performed after an interval has passed. The interval can be specified in milliseconds, beats, or can be an action of itself. 'repeat_start 'myrepeatname' 1bt' or 'repeat_start 'myrepeatname `get_var a`'"
            },
            "repeat_start_instant":
            {
                "description": "Repeat an action at a specified interval: 'repeat_start_instant 'myrepeatname' 1000ms 5 & browser_scroll +1' (first parameter is an identifier name, second parameter is the interval and the third optional parameter can specify a number of times to repeat). The first action will be performed immediately."
            },
            "repeat_stop":
            {
                "description": "stop a previous repeat_start or repeat_start_instant action: 'repeat_stop 'myrepeatname''"
            },
            "wait":
            {
                "description": "wait for the specified amount of time between two script actions: 'wait 1bt & pause', 'wait 500ms & play'"
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
                "description": "check if a particular feature is being used('filter', 'equalizer', 'loop', 'cue', 'sample', 'pads', 'effect', 'load') "
            },
            "load_skin":
            {
                "description": "load a new skin. Use syntax \" load_skin ':newvariation' \" to load a different variation inside the same skin file."
            },
            "lock_panel": {
                "description": "NOTE: despite the name, this action acts on <split> elements, not <panel>",
                "alias": "lock_pannel"
            },
            "multibutton":
            {
                "description": "Click on the named multibutton: 'multibutton \"my_button\"'"
            },
            "multibutton_select":
            {
                "description": "Open the selection menu for the named multibutton. If a second text parameter is provided after the name, use it as the new action to load in the multibutton: 'multibutton_select \"my_button\" \"goto_cue 2 & play\"'"
            },
            "rack":
            {
                "description": "Open/close a unit in specified rack. Example: \"rack 'rack1' 'unit1'\""
            },
            "rack_prioritize":
            {
                "description": "Prioritizes a unit of the specified rack. When more configurations with same size are available, the prioritized unit will get most space. Example: \"rack_prioritize 'rack1' 'unit1'\""
            },
            "rack_solo":
            {
                "description": "Open/close a unit in full size on the specified rack. Closing the unit will re-open the previous configuration. Example: \"rack_solo 'rack1' 'unit1'\""
            },
            "show_splitpanel":
            {
                "description": "Show/hide the specified split panel Examples: \"show_splitpanel 'sidelist'\", \"show_splitpanel 'sideview' on\", \"show_splitpanel 'sidelist' 50 %\""
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
                "description": "show or hide a panel on the skin. \"skin_panel 'my_panel' on\"",
                "alias": "skin_pannel"
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
                "description": "get the current time (use 'get_clock 12' to display AM/PM)"
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
                "description": "syntax: 'cycle \"my_var\" 42'. increment my_var, and goes back to 0 when it reaches 42. 'cycle \"my_var\" -42' decrements my_var, and goes to 41 after it reached 0."
            },
            "get_var":
            {
                "description": "get the value of the specified variable"
            },
            "set":
            {
                "description": "set 'varname' 5 sets variable varname to the value 5 set 'varname' 'var2' sets variable varname to the value of variable var2 set 'varname' `play` sets variable varname to the value of the action play"
            },
            "set_var":
            {
                "description": "set the value of the specified variable"
            },
            "set_var_dialog":
            {
                "description": "set_var_dialog 'varname' opens a dialog to enter the value of varname set_var_dialog 'varname' 'information text' opens a dialog to enter the value of varname, and shows the second parameter as informational text"
            },
            "toggle":
            {
                "description": "syntax: 'toggle \"my_var\"'. toggle my_var between true and false."
            },
            "var":
            {
                "description": "var \"my_var\" ? my_action1 : my_action2'. execute my_action1 if my_var is true (non zero), execute my_action2 otherwise. You can also compare var with a specific value: 'var \"my_var\" 1 ? my_action1 : my_action2' execute my_action1 is my_var is 1, or my_action2 otherwise"
            },
            "var_equal":
            {
                "description": "syntax: 'var_equal \"my_var\" 42 ? my_action1 : my_action2'. execute my_action1 if my_var equals 42, execute my_action2 otherwise. syntax: 'var_equal \"this_var\" \"that_var\" ? action1 : action2' execute action1 if this_var equals that_var, execute action2 otherwise"
            },
            "var_greater":
            {
                "description": "syntax: 'var_greater \"my_var\" 42 ? my_action1 : my_action2'. execute my_action1 if my_var is greater than 42, execute my_action2 otherwise."
            },
            "var_list":
            {
                "description": "show a window with a list of your current variables and their values"
            },
            "var_not_equal":
            {
                "description": "syntax: 'var_not_equal \"my_var\" 42 ? my_action1 : my_action2'. execute my_action1 if my_var doesn't equal 42, execute my_action2 otherwise."
            },
            "var_smaller":
            {
                "description": "syntax: 'var_smaller \"my_var\" 42 ? my_action1 : my_action2'. execute my_action1 if my_var is smaller than 42, execute my_action2 otherwise."
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
                "description": "minimize the application in the taskbar."
            },
            "open_stem_creator":
            {
                "description": "TODO"
            },
            "show_window":
            {
                "description": "on skin with multiple windows, show or hide the specified window"
            }
        },
        "audio":
        {
            "beat_juggle":
            {
                "description": "Alternatively jumps one beat forward and backward 'beat_juggle 0.5' will jump 1/2 beat forward or backward"
            },
            "beatjump":
            {
                "description": "Jump a certain number of beats as set by beatjump_select 'beatjump +1' to jump forward, or 'beatjump -1' to jump backwards"
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
                "description": "Select the number of beats the beatjump action will jump 'beatjump_select 4' to set beatjump to 4 beats 'beatjump_select +1' to set the next higher beat size 'beatjump_select 50%' to halve the current beat size 'beatjump_select 200%' to double the current beat size"
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
                "description": "change the position in the song. 'goto +10ms' jumps 10ms forward. 'goto -4' jumps 4 beats backward. 'goto 20%' jumps to 20% of the song's length."
            },
            "goto_bar":
            {
                "description": "put the song on its nth beat after the downbeat without loosing sync: 'goto_bar 4'"
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
                "description": "show a context menu to control the various auto-sync options",
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
                "description": "Lower the volume of all decks while active and activates microphone Use 'mic_talkover while_pressed' to only activate mic as long as button is held Use 'mic_talkover 20% 1000ms' to lower deck volumes to 20% and fade to the volume in 1 second. (Defaults are 30% and 400ms)"
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
                "alias": "jog | jog_wheel"
            },
            "motorwheel":
            {
                "description": "used for a motorized jogwheel. Each time the jogwheel moves, send 'motorwheel \"move\" +1.0' followed by 'motorwheel \"timestamp\" 1000.0'. 'move +1.0' means a full platter rotation. 'timestamp 1.0' means 1ms since last message. You should query 'motorwheel' and turn the motor on when it returns true and off when false."
            },
            "nudge":
            {
                "description": "'nudge +120ms' to nudge the song 120ms forward (using mastertempo if it's activated)."
            },
            "scratch": {
                "description": "'scratch +120ms' to scratch 120ms forward."
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
                "description": "used for a precision touchwheel that reports both position and speed. 'speedwheel +1.0 1.5' means a full rotation of the wheel, at 150% speed."
            },
            "touchwheel":
            {
                "description": "used for a jogwheel with touch sensitivity. 'touchwheel +1.0' means a full rotation of the wheel.",
                "alias": "scratch_wheel | scratchwheel"
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
                "alias": "crossfader_slider"
            },
            "crossfader_curve":
            {
                "description": "select the curve of the crossfader. enter a value to adjust the slope from a X curve (0%) to a inverted-U curve (100%). you can also specify common curves by name (\"smooth\", \"full\", \"scratch\", \"cut\"). or you can draw your own curve, using a syntax like 'crossfader_curve \"0 = [1, 0] / 0.5=[1, 1]/1=[0,1]\"'."
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
                "description": "TODO"
            },
            "gain": {
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
                "description": "TODO"
            },
            "add_filterfolder":
            {
                "description": "TODO"
            },
            "add_list":
            {
                "description": "TODO",
                "alias": "add_virtualfolder"
            },
            "add_to_list":
            {
                "description": "TODO",
                "alias": "virtualfolder_add"
            },
            "browsed_file_analyze":
            {
                "description": "TODO"
            },
            "browsed_file_color":
            {
                "description": "TODO"
            },
            "browsed_file_info":
            {
                "description": "TODO"
            },
            "browsed_file_prepare_stems":
            {
                "description": "TODO"
            },
            "browsed_file_reload_tag":
            {
                "description": "TODO"
            },
            "browsed_file_rename":
            {
                "description": "TODO"
            },
            "browsed_file_reveal":
            {
                "description": "TODO"
            },
            "browser_enter":
            {
                "description": "TODO"
            },
            "browser_export":
            {
                "description": "TODO"
            },
            "browser_folder":
            {
                "description": "TODO"
            },
            "browser_geniusdj":
            {
                "description": "TODO"
            },
            "browser_gotofolder":
            {
                "description": "TODO"
            },
            "browser_isactive":
            {
                "description": "TODO"
            },
            "browser_move":
            {
                "description": "TODO"
            },
            "browser_open_folder":
            {
                "description": "TODO"
            },
            "browser_options":
            {
                "description": "TODO"
            },
            "browser_padding":
            {
                "description": "TODO"
            },
            "browser_remove":
            {
                "description": "TODO"
            },
            "browser_scroll":
            {
                "description": "TODO"
            },
            "browser_shortcut":
            {
                "description": "TODO"
            },
            "browser_sort":
            {
                "description": "TODO"
            },
            "browser_window":
            {
                "description": "TODO"
            },
            "browser_zoom":
            {
                "description": "TODO",
                "alias": "browser"
            },
            "clear_search":
            {
                "description": "TODO"
            },
            "edit_comment":
            {
                "description": "TODO"
            },
            "edit_search":
            {
                "description": "TODO"
            },
            "edit_singer":
            {
                "description": "TODO"
            },
            "file_count":
            {
                "description": "TODO"
            },
            "file_info":
            {
                "description": "TODO"
            },
            "font_size":
            {
                "description": "TODO"
            },
            "goto_last_folder":
            {
                "description": "TODO"
            },
            "grid_view":
            {
                "description": "TODO"
            },
            "has_linked_tracks":
            {
                "description": "TODO"
            },
            "has_quick_filter":
            {
                "description": "TODO"
            },
            "info_options":
            {
                "description": "TODO",
                "alias": "infos_options"
            },
            "karaoke_add":
            {
                "description": "TODO"
            },
            "karaoke_load":
            {
                "description": "TODO"
            },
            "load":
            {
                "description": "TODO"
            },
            "load_deck_set":
            {
                "description": "TODO"
            },
            "load_next":
            {
                "description": "TODO"
            },
            "load_previous":
            {
                "description": "TODO"
            },
            "load_pulse":
            {
                "description": "TODO"
            },
            "load_pulse_active":
            {
                "description": "TODO"
            },
            "loaded":
            {
                "description": "TODO"
            },
            "log_search":
            {
                "description": "TODO"
            },
            "mark_linked_tracks": {
                "description": "TODO",
                "alias": "mark_related_tracks"
            },
            "not_played": { "description": "TODO" },
            "page": { "description": "TODO" },
            "playlist_load": { "description": "TODO" },
            "quick_filter": { "description": "TODO" },
            "rating": { "description": "TODO" },
            "recurse_folder": { "description": "TODO" },
            "save_deck_set": { "description": "TODO" },
            "search": { "description": "TODO" },
            "search_add": { "description": "TODO" },
            "search_delete": { "description": "TODO" },
            "search_folder": { "description": "TODO" },
            "search_options": { "description": "TODO" },
            "search_playlists": { "description": "TODO" },
            "set_browsed_file_bpm": { "description": "TODO" },
            "sidelist_add": { "description": "TODO" },
            "sidelist_clear": { "description": "TODO" },
            "sidelist_load": { "description": "TODO" },
            "sidelist_load_and_keep": { "description": "TODO" },
            "sidelist_load_and_remove": { "description": "TODO" },
            "sidereco_options": { "description": "TODO" },
            "sidereco_song": { "description": "TODO" },
            "sidereco_source": { "description": "TODO" },
            "sideview": { "description": "TODO" },
            "sideview_options": { "description": "TODO" },
            "sideview_sort": { "description": "TODO" },
            "sideview_title": { "description": "TODO" },
            "sideview_triggerpad": { "description": "TODO" },
            "undo_load": { "description": "TODO" },
            "unload": { "description": "TODO" },
            "view_options": { "description": "TODO" }
        },
        "config":
        {
            "apply_audio_config": { "description": "TODO" },
            "auto_cue": { "description": "TODO" },
            "auto_match_bpm": { "description": "TODO" },
            "auto_match_key": { "description": "TODO" },
            "auto_pitch_lock": { "description": "TODO" },
            "connect": { "description": "TODO" },
            "eventscheduler": { "description": "TODO" },
            "eventscheduler_start": { "description": "TODO" },
            "fader_start": { "description": "TODO" },
            "get_lemode": { "description": "TODO" },
            "play_mode": { "description": "TODO" },
            "quantize_loop": { "description": "TODO" },
            "quantize_setcue": { "description": "TODO" },
            "save_config":
            {
                "description": "TODO",
                "alias": "saveregistryconfig"
            },
            "setting": { "description": "TODO" },
            "setting_ismodified": { "description": "TODO" },
            "setting_reset": { "description": "TODO" },
            "setting_setdefault": { "description": "TODO" },
            "setting_setsession": { "description": "TODO" },
            "setting_setsession_deck": { "description": "TODO" },
            "settings":
            {
                "description": "TODO",
                "alias": "config"
            },
            "smart_cue": { "description": "TODO" },
            "smart_loop": { "description": "TODO" },
            "smart_play": {
                "description": "TODO",
                "alias": "auto_sync"
            },
            "smart_scratch":
            {
                "description": "TODO"
            }
        },
        "controllers":
        {
            "action_deck": { "description": "TODO" },
            "assign_controller": { "description": "TODO" },
            "controller_battery": { "description": "TODO" },
            "controller_mapping": { "description": "TODO" },
            "controllerscreen_deck": { "description": "TODO" },
            "denon_platter": { "description": "TODO" },
            "device_side": { "description": "TODO" },
            "display_time": { "description": "TODO" },
            "djc_button": { "description": "TODO" },
            "djc_button_popup": { "description": "TODO" },
            "djc_button_select": { "description": "TODO" },
            "djc_button_slider": { "description": "TODO" },
            "djc_panel": { "description": "TODO" },
            "djc_shift": { "description": "TODO" },
            "effect_fxsendreturndeck": { "description": "TODO" },
            "effect_fxsendreturndeck_multi": { "description": "TODO" },
            "effect_fxsendreturnenable": { "description": "TODO" },
            "gemini_waveform_zoomlevel": { "description": "TODO" },
            "get_controller_image": { "description": "TODO" },
            "get_controller_name": { "description": "TODO" },
            "get_controller_screen": { "description": "TODO" },
            "get_denon_cuepoints": { "description": "TODO" },
            "get_denon_platter": { "description": "TODO" },
            "get_display": { "description": "TODO" },
            "get_gemini_display": { "description": "TODO" },
            "get_gemini_waveform": { "description": "TODO" },
            "get_ns7_platter": { "description": "TODO" },
            "get_numark_beatgrid": { "description": "TODO" },
            "get_numark_songpos": { "description": "TODO" },
            "get_numark_waveform": { "description": "TODO" },
            "get_pioneer_display": { "description": "TODO" },
            "get_pioneer_loop_display": { "description": "TODO" },
            "get_rotation_cue": { "description": "TODO" },
            "get_rotation_slip": { "description": "TODO" },
            "invert_controllers": { "description": "TODO" },
            "keyboard_shortcuts": { "description": "TODO" },
            "menu": { "description": "TODO" },
            "menu_button": { "description": "TODO" },
            "menu_cycledisplay": { "description": "TODO" },
            "midiclock_active": { "description": "TODO" },
            "miditovst_active": { "description": "TODO" },
            "mixer_order": { "description": "TODO" },
            "motor_switch": { "description": "TODO" },
            "motorwheel_instant_play": { "description": "TODO" },
            "ns7_platter": { "description": "TODO" },
            "numark_waveform_zoom": { "description": "TODO" },
            "os2l_button": { "description": "TODO" },
            "os2l_cmd": { "description": "TODO" },
            "os2l_info": { "description": "TODO" },
            "os2l_scene": { "description": "TODO" },
            "phase_movement": { "description": "TODO" },
            "phase_position": { "description": "TODO" },
            "pioneer_cue": { "description": "TODO" },
            "pioneer_play": { "description": "TODO" },
            "refresh_controller": { "description": "TODO" },
            "reinit_controller": { "description": "TODO" },
            "rescan_controllers": { "description": "TODO" },
            "rzx_touch": { "description": "TODO" },
            "rzx_touch_x": { "description": "TODO" },
            "rzx_touch_y": { "description": "TODO" },
            "select_master_output": { "description": "TODO" },
            "set_deck": { "description": "TODO" },
            "shift": { "description": "TODO" },
            "show_text": { "description": "TODO" },
            "v7_status": { "description": "TODO" }
        },
        "cues":
        {
            "cue": { "description": "TODO" },
            "cue_action": { "description": "TODO" },
            "cue_button":
            {
                "description": "TODO",
                "alias": "cue_3button"
            },
            "cue_color": { "description": "TODO" },
            "cue_countdown": { "description": "TODO" },
            "cue_counter": { "description": "TODO" },
            "cue_countup": { "description": "TODO" },
            "cue_cup": { "description": "TODO" },
            "cue_display": { "description": "TODO" },
            "cue_loop": { "description": "TODO" },
            "cue_loop_autosync": { "description": "TODO" },
            "cue_loop_hold": { "description": "TODO" },
            "cue_name": { "description": "TODO" },
            "cue_play": { "description": "TODO" },
            "cue_pos": { "description": "TODO" },
            "cue_select": { "description": "TODO" },
            "cue_stop": { "description": "TODO" },
            "cues_options": { "description": "TODO" },
            "delete_cue": { "description": "TODO" },
            "get_cue": { "description": "TODO" },
            "goto_cue": { "description": "TODO" },
            "has_cue": { "description": "TODO" },
            "hot_cue":
            {
                "description": "TODO",
                "alias": "hotcue"
            },
            "lock_cues": { "description": "TODO" },
            "set_cue": { "description": "TODO" },
            "shift_all_cues": { "description": "TODO" },
            "silent_cue": { "description": "TODO" },
            "sort_cues": { "description": "TODO" }
        },
        "deck_select":
        {
            "cross_assign": { "description": "TODO" },
            "get_deck_color": { "description": "TODO" },
            "invert_deck": { "description": "TODO" },
            "leftcross": { "description": "TODO" },
            "leftdeck": { "description": "TODO" },
            "masterdeck": { "description": "TODO" },
            "masterdeck_auto": { "description": "TODO" },
            "pfl": { "description": "TODO" },
            "rightcross": { "description": "TODO" },
            "rightdeck": { "description": "TODO" },
            "select": { "description": "TODO" }
        },
        "equalizer":
        {
            "eq_crossfader_high": { "description": "TODO" },
            "eq_crossfader_low": { "description": "TODO" },
            "eq_crossfader_mid":
            {
                "description": "TODO",
                "alias": "eq_crossfader_med"
            },
            "eq_high":
            {
                "description": "TODO",
                "alias": "eq_high_slider"
            },
            "eq_high_freq": { "description": "TODO" },
            "eq_kill_high": { "description": "TODO" },
            "eq_kill_low": { "description": "TODO" },
            "eq_kill_mid": {
                "description": "TODO",
                "alias": "eq_kill_med"
            },
            "eq_low":
            {
                "description": "TODO",
                "alias": "eq_low_slider"
            },
            "eq_low_freq": { "description": "TODO" },
            "eq_mid":
            {
                "description": "TODO",
                "alias": "eq_med\neq_mid_slider"
            },
            "eq_mid_freq": { "description": "TODO" },
            "eq_mode": { "description": "TODO" },
            "eq_reset": { "description": "TODO" },
            "filter":
            {
                "description": "TODO",
                "alias": "filter_slider"
            },
            "filter_activate": { "description": "TODO" },
            "filter_label": { "description": "TODO" },
            "filter_resonance": { "description": "TODO" },
            "filter_selectcolorfx": { "description": "TODO" },
            "has_stems": { "description": "TODO" },
            "high_label": { "description": "TODO" },
            "low_label": { "description": "TODO" },
            "mid_label": { "description": "TODO" },
            "mute_stem": { "description": "TODO" },
            "only_stem": { "description": "TODO" },
            "stem": { "description": "TODO" },
            "stem_color": { "description": "TODO" },
            "stem_pad": { "description": "TODO" },
            "stems_bleed": { "description": "TODO" }
        },
        "get":
        {
            "browsed_song": { "description": "TODO" },
            "browsed_song_hashtag": { "description": "TODO" },
            "get_activedeck": { "description": "TODO" },
            "get_album": { "description": "TODO" },
            "get_arm": { "description": "TODO" },
            "get_artist": { "description": "TODO" },
            "get_artist_before_feat": { "description": "TODO" },
            "get_artist_title": { "description": "TODO" },
            "get_artist_title_separator": { "description": "TODO" },
            "get_askthedj": { "description": "TODO" },
            "get_askthedj_unread": { "description": "TODO" },
            "get_automix": { "description": "TODO" },
            "get_bar": { "description": "TODO" },
            "get_beat": { "description": "TODO" },
            "get_beat2": { "description": "TODO" },
            "get_beat_bar": { "description": "TODO" },
            "get_beat_counter": { "description": "TODO" },
            "get_beat_num": { "description": "TODO" },
            "get_beatdiff": { "description": "TODO" },
            "get_beatgrid": { "description": "TODO" },
            "get_beatpos": { "description": "TODO" },
            "get_bpm": { "description": "TODO" },
            "get_browsed_album": { "description": "TODO" },
            "get_browsed_artist": { "description": "TODO" },
            "get_browsed_artist_title": { "description": "TODO" },
            "get_browsed_bpm": { "description": "TODO" },
            "get_browsed_color": { "description": "TODO" },
            "get_browsed_comment": { "description": "TODO" },
            "get_browsed_composer": { "description": "TODO" },
            "get_browsed_filepath": { "description": "TODO" },
            "get_browsed_folder": { "description": "TODO" },
            "get_browsed_folder_icon": { "description": "TODO" },
            "get_browsed_folder_path": { "description": "TODO" },
            "get_browsed_folder_scrollpos": { "description": "TODO" },
            "get_browsed_folder_scrollsize": { "description": "TODO" },
            "get_browsed_folder_selection_index": { "description": "TODO" },
            "get_browsed_folder_tab": { "description": "TODO" },
            "get_browsed_genre": { "description": "TODO" },
            "get_browsed_header": { "description": "TODO" },
            "get_browsed_key": { "description": "TODO" },
            "get_browsed_scrollpos": { "description": "TODO" },
            "get_browsed_scrollsize": { "description": "TODO" },
            "get_browsed_selection_index": { "description": "TODO" },
            "get_browsed_song": { "description": "TODO" },
            "get_browsed_title": { "description": "TODO" },
            "get_browsed_title_artist": { "description": "TODO" },
            "get_build": { "description": "TODO" },
            "get_comment": { "description": "TODO" },
            "get_composer": { "description": "TODO" },
            "get_custom_text": { "description": "TODO" },
            "get_deck": { "description": "TODO" },
            "get_deck_analysis": { "description": "TODO" },
            "get_deck_letter": { "description": "TODO" },
            "get_decks": { "description": "TODO" },
            "get_defaultdeck": { "description": "TODO" },
            "get_featuring_after_artist": { "description": "TODO" },
            "get_filename": { "description": "TODO" },
            "get_filepath": { "description": "TODO" },
            "get_filesize": { "description": "TODO" },
            "get_firstbeat": { "description": "TODO" },
            "get_firstbeat_local": { "description": "TODO" },
            "get_genre": { "description": "TODO" },
            "get_hasheadphones":
            {
                "description": "TODO",
                "alias": "get_hasheadphone"
            },
            "get_hasinput": { "description": "TODO" },
            "get_haslinein": { "description": "TODO" },
            "get_hasmaster": { "description": "TODO" },
            "get_hasmic": { "description": "TODO" },
            "get_hwnd": { "description": "TODO" },
            "get_leftdeck": { "description": "TODO" },
            "get_license": { "description": "TODO" },
            "get_loaded_song": { "description": "TODO" },
            "get_loaded_song_color": { "description": "TODO" },
            "get_membership": { "description": "TODO" },
            "get_phrase_num": { "description": "TODO" },
            "get_plugindeck": { "description": "TODO" },
            "get_position": { "description": "TODO" },
            "get_record_message": { "description": "TODO" },
            "get_record_min": { "description": "TODO" },
            "get_record_ms": { "description": "TODO" },
            "get_record_msf": { "description": "TODO" },
            "get_record_sec": { "description": "TODO" },
            "get_record_size": { "description": "TODO" },
            "get_record_time": { "description": "TODO" },
            "get_remix_after_title": { "description": "TODO" },
            "get_rightdeck": { "description": "TODO" },
            "get_rotation": { "description": "TODO" },
            "get_song_event": { "description": "TODO" },
            "get_songlength": { "description": "TODO" },
            "get_spectrum_band": { "description": "TODO" },
            "get_time": { "description": "TODO" },
            "get_time_hour": { "description": "TODO" },
            "get_time_min": { "description": "TODO" },
            "get_time_ms": { "description": "TODO" },
            "get_time_msf": { "description": "TODO" },
            "get_time_sec": { "description": "TODO" },
            "get_time_sign": { "description": "TODO" },
            "get_title": { "description": "TODO" },
            "get_title_artist": { "description": "TODO" },
            "get_title_before_remix": { "description": "TODO" },
            "get_title_remix": { "description": "TODO" },
            "get_totaltime_min": { "description": "TODO" },
            "get_totaltime_ms": { "description": "TODO" },
            "get_totaltime_msf": { "description": "TODO" },
            "get_totaltime_sec": { "description": "TODO" },
            "get_username": { "description": "TODO" },
            "get_vdj_folder": { "description": "TODO" },
            "get_version": { "description": "TODO" },
            "get_volume": { "description": "TODO" },
            "get_year": { "description": "TODO" },
            "has_aux": { "description": "TODO" },
            "loaded_song": { "description": "TODO" },
            "loaded_song_hashtag": { "description": "TODO" },
            "prelisten_info": { "description": "TODO" }
        },
        "karaoke":
        {
            "get_karaoke_background_song": { "description": "TODO" },
            "get_next_karaoke_song": { "description": "TODO" },
            "has_karaoke_next": { "description": "TODO" },
            "is_karaoke_idle": { "description": "TODO" },
            "is_karaoke_playing": { "description": "TODO" },
            "karaoke": { "description": "TODO" },
            "karaoke_options": { "description": "TODO" },
            "karaoke_show": { "description": "TODO" },
            "karaoke_venue_name": { "description": "TODO" }
        },
        "key":
        {
            "get_harmonic": { "description": "TODO" },
            "get_key": { "description": "TODO" },
            "get_key_color": { "description": "TODO" },
            "get_key_modifier": { "description": "TODO" },
            "get_key_modifier_text": { "description": "TODO" },
            "key": { "description": "TODO" },
            "key_lock":
            {
                "description": "TODO",
                "alias": "keylock"
            },
            "key_match_button": { "description": "TODO" },
            "key_match_menu": { "description": "TODO" },
            "key_move": { "description": "TODO" },
            "key_smooth": { "description": "TODO" },
            "keycue_pad": { "description": "TODO" },
            "keycue_pad_color": { "description": "TODO" },
            "keycue_pad_jump": { "description": "TODO" },
            "keycue_pad_page": { "description": "TODO" },
            "match_key": { "description": "TODO" },
            "set_key": { "description": "TODO" }
        },
        "loop":
        {
            "get_active_loop": { "description": "TODO" },
            "get_loop": { "description": "TODO" },
            "get_loop_in_time": { "description": "TODO" },
            "get_loop_out_time": { "description": "TODO" },
            "get_saved_loop": { "description": "TODO" },
            "loop": { "description": "TODO" },
            "loop_adjust": { "description": "TODO" },
            "loop_back": { "description": "TODO" },
            "loop_button": { "description": "TODO" },
            "loop_color": { "description": "TODO" },
            "loop_delete": { "description": "TODO" },
            "loop_double": { "description": "TODO" },
            "loop_exit": { "description": "TODO" },
            "loop_half": { "description": "TODO" },
            "loop_in": { "description": "TODO" },
            "loop_length": { "description": "TODO" },
            "loop_load": { "description": "TODO" },
            "loop_load_prepare": { "description": "TODO" },
            "loop_move": { "description": "TODO" },
            "loop_options": { "description": "TODO" },
            "loop_out": { "description": "TODO" },
            "loop_pad": { "description": "TODO" },
            "loop_pad_mode": { "description": "TODO" },
            "loop_pad_page": { "description": "TODO" },
            "loop_position": { "description": "TODO" },
            "loop_roll": { "description": "TODO" },
            "loop_roll_mode": { "description": "TODO" },
            "loop_save": { "description": "TODO" },
            "loop_select": { "description": "TODO" },
            "pioneer_loop": { "description": "TODO" },
            "pioneer_loop_in": { "description": "TODO" },
            "pioneer_loop_out": { "description": "TODO" },
            "reloop": { "description": "TODO" },
            "reloop_exit": { "description": "TODO" },
            "repeat_song": { "description": "TODO" },
            "saved_loop": { "description": "TODO" },
            "saved_loop_autotrigger": { "description": "TODO" },
            "saved_loop_display": { "description": "TODO" },
            "saved_loop_prepare": { "description": "TODO" },
            "slicer": { "description": "TODO" }
        },
        "macro":
        {
            "macro_play":
            {
                "description": "TODO"
            },
            "macro_record":
            {
                "description": "TODO"
            }
        },
        "pads":
        {
            "pad":
            {
                "description": "TODO"
            },
            "pad_bank2":
            {
                "description": "TODO"
            },
            "pad_button_color":
            {
                "description": "TODO"
            },
            "pad_color":
            {
                "description": "TODO"
            },
            "pad_edit":
            {
                "description": "TODO"
            },
            "pad_has_16pads":
            {
                "description": "TODO"
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
                "description": "TODO"
            },
            "pad_page":
            {
                "description": "TODO",
                "alias": "pad_pages"
            },
            "pad_page_select":
            {
                "description": "TODO",
                "alias": "pad_page_favorite_select"
            },
            "pad_param":
            {
                "description": "TODO"
            },
            "pad_param2":
            {
                "description": "TODO"
            },
            "pad_param_visible":
            {
                "description": "TODO"
            },
            "pad_pressure":
            {
                "description": "TODO"
            },
            "pad_pushed":
            {
                "description": "TODO"
            },
            "padfx":
            {
                "description": "TODO"
            },
            "padfx_single":
            {
                "description": "TODO"
            },
            "padshift":
            {
                "description": "TODO"
            },
            "padshift_button_color":
            {
                "description": "TODO"
            },
            "padshift_pressure":
            {
                "description": "TODO"
            }
        },
        "pitch":
        {
            "backspin":
            {
                "description": "TODO"
            },
            "brakespeed":
            {
                "description": "TODO"
            },
            "get_pitch":
            {
                "description": "TODO"
            },
            "get_pitch_value":
            {
                "description": "TODO"
            },
            "get_pitch_zero":
            {
                "description": "TODO"
            },
            "master_tempo":
            {
                "description": "TODO"
            },
            "pitch": {
                "description": "TODO",
                "alias": "pitch2 | pitch2_slider | pitch_slider"
            },
            "pitch_bend":
            {
                "description": "TODO"
            },
            "pitch_lock":
            {
                "description": "TODO",
                "alias": "pitchlock"
            },
            "pitch_motorized":
            {
                "description": "TODO"
            },
            "pitch_range":
            {
                "description": "TODO"
            },
            "pitch_relative":
            {
                "description": "TODO"
            },
            "pitch_reset":
            {
                "description": "TODO"
            },
            "pitch_zero":
            {
                "description": "TODO"
            },
            "startupspeed":
            {
                "description": "TODO"
            }
        },
        "plugins":
        {
            "effect_3slots_layout":
            {
                "description": "TODO"
            },
            "effect_active":
            {
                "description": "TODO",
                "alias": "effect_activate"
            },
            "effect_arm_active":
            {
                "description": "TODO"
            },
            "effect_arm_beats": { "description": "TODO" },
            "effect_arm_bpm": { "description": "TODO" },
            "effect_arm_deck": { "description": "TODO" },
            "effect_arm_select": { "description": "TODO" },
            "effect_arm_slider": { "description": "TODO" },
            "effect_arm_slider_label": { "description": "TODO" },
            "effect_arm_slider_name": { "description": "TODO" },
            "effect_arm_slider_text": { "description": "TODO" },
            "effect_arm_slot": { "description": "TODO" },
            "effect_arm_stem": { "description": "TODO" },
            "effect_bank_load": { "description": "TODO" },
            "effect_bank_save": { "description": "TODO" },
            "effect_beats": { "description": "TODO" },
            "effect_beats_all": { "description": "TODO" },
            "effect_bpm_deck": { "description": "TODO" },
            "effect_bpm_deck_tap": { "description": "TODO" },
            "effect_button": { "description": "TODO" },
            "effect_clone": { "description": "TODO" },
            "effect_colorfx": { "description": "TODO" },
            "effect_colorslider": { "description": "TODO" },
            "effect_command": { "description": "TODO" },
            "effect_disable_all": { "description": "TODO" },
            "effect_dock_gui": { "description": "TODO" },
            "effect_has_beats": { "description": "TODO" },
            "effect_has_button": { "description": "TODO" },
            "effect_has_length": { "description": "TODO" },
            "effect_has_slider": { "description": "TODO" },
            "effect_mixfx": { "description": "TODO" },
            "effect_mixfx_activate": { "description": "TODO" },
            "effect_mixfx_select": { "description": "TODO" },
            "effect_releaseslider": { "description": "TODO" },
            "effect_releaseslider_active": { "description": "TODO" },
            "effect_select": { "description": "TODO" },
            "effect_select_multi": { "description": "TODO" },
            "effect_select_popup": { "description": "TODO" },
            "effect_select_toggle": { "description": "TODO" },
            "effect_show_gui": { "description": "TODO" },
            "effect_slider":
            {
                "description": "TODO",
                "alias": "effect_slider_slider"
            },
            "effect_slider_active":
            {
                "description": "TODO",
                "alias": "effect_slider_activate"
            },
            "effect_slider_reset": { "description": "TODO" },
            "effect_slider_skip_length": { "description": "TODO" },
            "effect_stems": { "description": "TODO" },
            "effect_stems_color": { "description": "TODO" },
            "effects_used": { "description": "TODO" },
            "get_effect_button_count": { "description": "TODO" },
            "get_effect_button_name": { "description": "TODO" },
            "get_effect_button_shortname": { "description": "TODO" },
            "get_effect_name": { "description": "TODO" },
            "get_effect_slider_count": { "description": "TODO" },
            "get_effect_slider_default": { "description": "TODO" },
            "get_effect_slider_label": { "description": "TODO" },
            "get_effect_slider_label_full": { "description": "TODO" },
            "get_effect_slider_name": { "description": "TODO" },
            "get_effect_slider_shortname": { "description": "TODO" },
            "get_effect_slider_text": { "description": "TODO" },
            "get_effect_string":
            {
                "description": "TODO",
                "alias": "effect_string"
            },
            "get_effect_string_name": { "description": "TODO" },
            "get_effect_title": { "description": "TODO" },
            "get_effects_used": { "description": "TODO" },
            "get_nb_multicam": { "description": "TODO" },
            "get_video_fx_slider_label": { "description": "TODO" },
            "get_videofx_name": { "description": "TODO" },
            "get_videotrans_name": { "description": "TODO" },
            "is_releasefx": { "description": "TODO" },
            "pluginsongpos": { "description": "TODO" },
            "show_pluginpage": { "description": "TODO" },
            "video_fx": { "description": "TODO" },
            "video_fx_button": { "description": "TODO" },
            "video_fx_clear": { "description": "TODO" },
            "video_fx_select": { "description": "TODO" },
            "video_fx_slider":
            {
                "description": "TODO",
                "alias": "video_fx_slider_slider"
            },
            "video_source": { "description": "TODO" },
            "video_source_select": { "description": "TODO" },
            "video_transition_button": { "description": "TODO" },
            "video_transition_select": { "description": "TODO" },
            "video_transition_slider":
            {
                "description": "TODO",
                "alias": "video_transition_slider_slider"
            }
        },
        "poi":
        {
            "adjust_cbg": { "description": "TODO" },
            "beat_tap": { "description": "TODO" },
            "edit_bpm": { "description": "TODO" },
            "edit_poi": { "description": "TODO" },
            "goto_mixpoint": { "description": "TODO" },
            "reanalyze": { "description": "TODO" },
            "set_bpm": { "description": "TODO" },
            "set_firstbeat": { "description": "TODO" },
            "set_loadpoint": { "description": "TODO" },
            "set_mixpoint": { "description": "TODO" }
        },
        "prelisten":
        {
            "prelisten":
            {
                "description": "TODO",
                "alias": "preview"
            },
            "prelisten_options": { "description": "TODO" },
            "prelisten_output": { "description": "TODO" },
            "prelisten_pos": { "description": "TODO" },
            "prelisten_stop": { "description": "TODO" }
        },
        "record":
        {
            "broadcast": { "description": "TODO" },
            "broadcast_message": { "description": "TODO" },
            "record": { "description": "TODO" },
            "record_config": { "description": "TODO" },
            "record_cut": { "description": "TODO" },
            "record_vu": { "description": "TODO" }
        },
        "sampler":
        {
            "get_sample_color": { "description": "TODO" },
            "get_sample_info": { "description": "TODO" },
            "get_sample_name":
            {
                "description": "TODO",
                "alias": "get_sample_slot_name"
            },
            "get_sampler_bank": { "description": "TODO" },
            "get_sampler_bank_count": { "description": "TODO" },
            "get_sampler_bank_id": { "description": "TODO" },
            "get_sampler_count": { "description": "TODO" },
            "get_sampler_slot": { "description": "TODO" },
            "sampler_abort_rec": { "description": "TODO" },
            "sampler_assign": { "description": "TODO" },
            "sampler_bank": { "description": "TODO" },
            "sampler_color": { "description": "TODO" },
            "sampler_edit": { "description": "TODO" },
            "sampler_group_color": { "description": "TODO" },
            "sampler_group_mute": { "description": "TODO" },
            "sampler_group_name": { "description": "TODO" },
            "sampler_group_volume": { "description": "TODO" },
            "sampler_has_group": { "description": "TODO" },
            "sampler_load_to_deck": { "description": "TODO" },
            "sampler_loaded": { "description": "TODO" },
            "sampler_loop": { "description": "TODO" },
            "sampler_mode":
            {
                "description": "TODO",
                "alias": "sampler_rapidfire"
            },
            "sampler_mute": { "description": "TODO" },
            "sampler_options": { "description": "TODO" },
            "sampler_output": { "description": "TODO" },
            "sampler_pad": { "description": "TODO" },
            "sampler_pad_page": { "description": "TODO" },
            "sampler_pad_shift": { "description": "TODO" },
            "sampler_pad_volume": { "description": "TODO" },
            "sampler_pfl": { "description": "TODO" },
            "sampler_play": { "description": "TODO" },
            "sampler_play_stop": { "description": "TODO" },
            "sampler_play_stutter": { "description": "TODO" },
            "sampler_position": { "description": "TODO" },
            "sampler_rec": { "description": "TODO" },
            "sampler_rec_delete": { "description": "TODO" },
            "sampler_select":
            {
                "description": "TODO",
                "alias": "sampler_default"
            },
            "sampler_start_rec": { "description": "TODO" },
            "sampler_stop": { "description": "TODO" },
            "sampler_stop_rec": { "description": "TODO" },
            "sampler_used":
            {
                "description": "TODO",
                "alias": "get_sampler_used"
            },
            "sampler_velocity": { "description": "TODO" },
            "sampler_volume": { "description": "TODO" },
            "sampler_volume_master": { "description": "TODO" },
            "sampler_volume_nogroup": { "description": "TODO" },
            "scratchbank_assign": { "description": "TODO" },
            "scratchbank_edit": { "description": "TODO" },
            "scratchbank_load": { "description": "TODO" },
            "scratchbank_load_to_deck": { "description": "TODO" },
            "scratchbank_unload":
            {
                "description": "TODO",
                "alias": "sampler_unload_from_deck"
            }
        },
        "sandbox":
        {
            "can_sandbox": { "description": "TODO" },
            "sandbox": { "description": "TODO" }
        },
        "sync":
        {
            "auto_bpm_transition": { "description": "TODO" },
            "auto_bpm_transition_options": { "description": "TODO" },
            "auto_sync_settings": { "description": "TODO" },
            "beatlock": { "description": "TODO" },
            "get_bpm_match": { "description": "TODO" },
            "is_sync": { "description": "TODO" },
            "match_bpm": { "description": "TODO" },
            "match_gain": { "description": "TODO" },
            "phrase_sync": { "description": "TODO" },
            "play_onbeat": { "description": "TODO" },
            "play_sync": { "description": "TODO" },
            "play_sync_onbeat": {
                "description": "TODO",
                "alias": "sync_nocbg"
            },
            "quantize_all": { "description": "TODO" },
            "smart_fader": { "description": "TODO" },
            "sync": { "description": "TODO" },
            "sync_hint": { "description": "TODO" }
        },
        "text":
        {
            "countdown": { "description": "TODO" },
            "get_status": { "description": "TODO" },
            "get_text": { "description": "TODO" },
            "stopwatch": { "description": "TODO" },
            "stopwatch_reset": { "description": "TODO" }
        },
        "timecode":
        {
            "get_hastimecode": { "description": "TODO" },
            "get_timecode_quality": { "description": "TODO" },
            "invert_timecode": { "description": "TODO" },
            "timecode_active": { "description": "TODO" },
            "timecode_bypass": { "description": "TODO" },
            "timecode_cd_mode": { "description": "TODO" },
            "timecode_config": { "description": "TODO" },
            "timecode_mode": { "description": "TODO" },
            "timecode_motor_enable": { "description": "TODO" },
            "timecode_options": { "description": "TODO" },
            "timecode_pitch": { "description": "TODO" },
            "timecode_reset_pitch": { "description": "TODO" }
        },
        "video":
        {
            "has_video_mix": { "description": "TODO" },
            "is_audioonlyvisualisation": { "description": "TODO" },
            "is_video": { "description": "TODO" },
            "leftvideo": { "description": "TODO" },
            "leftvideo_button": { "description": "TODO" },
            "over_video": {
                "description": "TODO",
                "alias": "overvideo"
            },
            "rightvideo": { "description": "TODO" },
            "rightvideo_button": { "description": "TODO" },
            "video": { "description": "TODO" },
            "video_crossfader": { "description": "TODO" },
            "video_crossfader_auto": { "description": "TODO" },
            "video_crossfader_link": { "description": "TODO" },
            "video_delay": { "description": "TODO" },
            "video_fadetoblack": { "description": "TODO" },
            "video_level": { "description": "TODO" },
            "video_output": { "description": "TODO" },
            "video_transition": { "description": "TODO" }
        }
    }
}