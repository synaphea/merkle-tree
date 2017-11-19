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
			"actions" :
			[
				{
					"action_name" : "test",
					 # a hack to run deps/mhash ./configure during `node-gyp configure`
					'inputs': ['<!@(sh scripts/libmhash-config.sh)'],
					'outputs': [''],
					'action': [
					# run deps/mhash `make`
					'sh', 'scripts/libmhash-build.sh'
					]
				}
			]
		}
  ]
}