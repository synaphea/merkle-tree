{
  "targets": [
    {
      "include_dirs": [
        "deps/mhash/include",
        "<!(node -e \"require('nan')\")"
      ],
      "target_name": "module",
      "product_dir": "../lib/binding/",
      "sources": [ "./src/main.cpp" ],
      "dependencies" : [ "libmhash" ],
			"libraries" : [ "<(module_root_dir)/deps/mhash/lib/.libs/libmhash.a" ]
    },
		{
			"target_name" : "libmhash",
			"type" : "none",			
			'conditions': [
				[
					'OS=="win"',
					{						
					}
				],
				[
					'OS=="mac"',
					{
						"actions" :	[
							{
								"action_name" : "test",
								'inputs': ['<!@(sh scripts/libmhash-config.sh)'],
								'outputs': [''],
								'action': [
									'sh', 'scripts/libmhash-build.sh'
								]
							}
						],
					}
				],
				[
					'OS!="win"',
					{
						"actions" :
						[
							{
								"action_name" : "test",
								'inputs': ['<!@(sh scripts/libmhash-config.sh)'],
								'outputs': [''],
								'action': [
									'sh', 'scripts/libmhash-build.sh'
								]
							}
						],
					}
				]
			]
		}
  ]
}