{
  "targets": [
    {
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ],
      "target_name": "module", # sets the name of the binary file
      "product_dir": "../lib/binding/", # controls where the node binary file gets copied to (./lib/binding/module.node)
      "sources": [ "./src/main.cpp" ]
    }
  ]
}