WARNING: Any notebooks saved here will be lost once this jupyter module is restaged.

User File -> Download as -> Notebook (.ipynb) [save the file to your local system]

To upload ipynb files into your running jupyter instance, use cf ssh to copy them to /app/notebooks

Then you will be able open them with File -> Open...


In a Jupyter Terminal...

pip3 uninstall hana_ml -y

wget -c http://thedrop.sap-a-team.com/files/hana_ml-1.0.7.tar.gz
pip3 install hana_ml --find-links ./hana_ml-1.0.7.tar.gz
