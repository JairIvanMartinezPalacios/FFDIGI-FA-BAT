window.FFDG_MTF_PDF_ADDITIONS = [
  {
    "id": "PDF-MTF-001",
    "station": "FLA",
    "code": "020023006_002",
    "name": "EROT access error for HGX_FW_ERoT_BMC_0(1:0x52). Retry.",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FLA",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Reseat the HMC Board, BMC board, and associated connections.",
        "detail": ""
      },
      {
        "title": "Replace the HMC board.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-002",
    "station": "FLA",
    "code": "020023006_15962",
    "name": "Unable to write FRU via ipmitool cmd but was able to write via i2c. Please check FRU ID for PDB.",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FLA",
    "steps": [
      {
        "title": "Reseat the PDB sideband cable between PDB J15 and Bianca_0 JSB2.",
        "detail": ""
      },
      {
        "title": "Inspect the BMC interposer for damage; replace it if needed.",
        "detail": ""
      },
      {
        "title": "Replace the PDB sideband cable between PDB J15 and Bianca_0 JSB2.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-003",
    "station": "FLA",
    "code": "020023006_465746_564",
    "name": "Mismatches found in log comparison: get_hmc_fw_version_file[47G>>>Output>>> gb200nvl-25.06-2-0- gfaf5e314.1749687191.3925676, get_hmc_fw_build_type[47G>>>Output>>> dev-platform Mismatches found in log comparison: get_hmc_fw_version_file[47G>>>Output>>> gb200nvl-25.06-2-0- gfaf5e314.1749687290.2405307, get_hmc_fw_build_type[47G>>>Output>>> prod-platform",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FLA",
    "steps": [
      {
        "title": "Check the BMC and HMC build.",
        "detail": "If a device reports prod-platform, it must be replaced.\nRetrieve the BMC IP address:\narp -n | grep BMC_MAC\nReplace BMC_IP in the following script with the BMC IP address, then run the script.\n/home/nvguest/sean/MFG_Diag/GB200/mgx_mp/618-24975-0000-MFG-\n50526.1/depot_modules/nv_tools/scripts/nvdebug_14 \\\n-i BMC_IP \\\n-u 'admin' \\\n-p '<BMC_PASSWORD>' \\\n-v \\\n-o /home/nvguest/sean/nvdebug_logs \\\n-C /home/nvguest/sean/MFG_Diag/GB200/mgx_mp/618-24975-0000-MFG-\n50526.1/depot_modules/nv_tools/assets/nvdebug/gb200_nvdebug_config.ya\nml \\\n-S R24\nLocate the ZIP file created under /home/nvguest/sean/nvdebug_logs.\nOpen the following log within the ZIP file:"
      }
    ]
  },
  {
    "id": "PDF-MTF-004",
    "station": "AST, FTS, IOT, NVL, RIN, FCT",
    "code": "033026006_009-001-1-000000000140, 054018006_XXX-000-1-000000000140, 055004006_015-000-1-000000000140, 028001006_000-000-1-000000000272",
    "name": "Nvlink Status on Tray x GPUy Nvlink x STATUS: INVALID. FOM Values = [x, x]. Rack Slot 1, INVALID BDF 00xx:0x:00.0 passed to GetLinkPhysLoc(). NVLink_CC 0019:01:00.0 - Fail to enter HS Mode on NvLink 3. Found 5e-06, exceeded threshold 1e-07. NvLink bus error. Found 5e-06, exceeded threshold 1e-07. User aborted the script. Found X, exceeded threshold 1e-06, X connector X, Column X, pins C/D, G/H. Found 5e-07, exceeded threshold 1e-25, 4x19 connector 2, Column 13. Nvlink signal integrity issue on... EXPECTED 4 CBC, ONLY DETECTED 3",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · AST, FTS, IOT, NVL, RIN, FCT",
    "steps": [
      {
        "title": "Using a camera, visually inspect the tray NVLink RAF connectors for damage or contamination.",
        "detail": ""
      },
      {
        "title": "Based on the NVLink RAF connector inspection:",
        "detail": "If no issues are found, move the tray to a different MTF slot.\nIf an issue is found, replace the suspect Bianca(s)."
      },
      {
        "title": "Using a camera, visually inspect the NVLink loopback CBC in the MTF slot for damage or contamination.",
        "detail": ""
      },
      {
        "title": "Based on the NVLink loopback CBC inspection:",
        "detail": "If an issue is found, remove the MTF slot from usage until the CBC can be replaced.\nIf no issue is found, continue using the MTF slot."
      },
      {
        "title": "If the retest in the different MTF slot fails or damage is found, replace the suspect Bianca(s).",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-005",
    "station": "AST, RIN, FCT, FTS",
    "code": "0550110037_1, 054018006_048-000-0-000000000086",
    "name": "GPU MODS exceeded the timeout and will be terminated Tegra MODS exceeded the timeout and will be terminated MODS exited with status: SIGBUS - Bus error (bad memory access) Script failed to execute Failed MODS 43 CpuStress test. The 1 run 198.164 secs. Error: unexpected device interrupts Bandwidth out of range ERROR: could not ping device XXX.XX.X.XXX Not available SSH Operation cmd sftp failed or unable to establish SSH connection to XXX.XX.X.XXX",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · AST, RIN, FCT, FTS",
    "steps": [
      {
        "title": "Reseat in the same MTF slot.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-006",
    "station": "AST",
    "code": "023001006_048-000-0-000000000106",
    "name": "FRU_688-24975-0012-000_Board_Mfg 'FRU_688-24975-0012-000_Board_Mfg': not found. expected '=/.+'",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · AST",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Reseat the 1Gb NIC and HMC.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-007",
    "station": "AST",
    "code": "023001036_626633720A",
    "name": "Please check: BF3(R)",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · AST",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Confirm that the correct right BF3 part number is installed; replace the BF3 board if it is incorrect.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-008",
    "station": "FCT, FTS, RIN",
    "code": "028001006_000-000-3-000000000014, 028001006_005-000-1-000000000194, 028001006_005-000-1-000000000316, 054018006_015-000-1-000000000194, 054018006_015-000-1-000000000316, 055004006_000-000-1-000000000194",
    "name": "Physical memory failed. Found memory error type \"SBE\" in \"FB\"., Found memory error type \"MISC\" in \"FB\". Found memory error type \"CORR\" in \"FB\". GPUXXXXX Found memory error type \"MISC\" in \"FB\"., Found memory error type \"SBE\" in \"FB\". GPUXXXXX Found memory error type \"CORR\" in \"FB\". GPUXXXXX Found memory error type \"SBE\" in \"FB\"., Found memory error type \"MISC\" in \"FB\".",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FCT, FTS, RIN",
    "steps": [
      {
        "title": "Replace bianca.",
        "detail": "Impacted bianca should be sent back to L6."
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-009",
    "station": "FCT",
    "code": "028001006_048-000-0-000000000086",
    "name": "HGX_FW_ERoT_FPGA_version 'HGX_FW_ERoT_FPGA_version': not found. expected '01.04.0031.0000_n04'",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FCT",
    "steps": [
      {
        "title": "AC cycle.",
        "detail": "Run diagnostics starting at FLA."
      },
      {
        "title": "Re-seat the BMC and HMC, including their associated cables.",
        "detail": ""
      },
      {
        "title": "Replace the HMC.",
        "detail": ""
      },
      {
        "title": "Replace the BMC.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-010",
    "station": "FCT, FTS",
    "code": "028001006_048-000-0-000000000086, 054001006_048-000-0-000000000086",
    "name": "BMC_FW_version': found 'GB200Nvl-25.05-3' expected 'GB200Nvl-25.06-2'",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FCT, FTS",
    "steps": [
      {
        "title": "Verify BMC module FW.",
        "detail": ""
      },
      {
        "title": "Replace BMC.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-011",
    "station": "FCT, FTS",
    "code": "028001006_051-000-0-000000000050",
    "name": "I2C I2C_Failure - Getting_xxx_Bianca_AINy_ADC_reading Check failed. na. Fail Message (MODS.log/tas.txt): Primary/Secondary Bianca AIN0 ADC reading Out of range. Note: AIN0 ADC indicates the cold plate leak sensor, while AIN1 ADC indicates the quick disconnect leak sensor.",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FCT, FTS",
    "steps": [
      {
        "title": "AC cycle.",
        "detail": "Run run_cable_check script."
      },
      {
        "title": "Inspect the cables, connectors, and leak sensors.",
        "detail": "Check that the cables to the CP (Cold Plate) leak sensor and QD (Quick Disconnect) leak sensor are\nconnected.\nCheck whether J18 (CP leak sensor connector) or J125 (QD leak sensor connector) has been lifted\ndue to mishandling. If either connector has been lifted, replace the Bianca board.\nCheck the CP and QD leak sensors for surface damage, including scratches or tears. If a leak sensor\nis damaged, replace it.\nDepending on the issue, use a Digital Multi-Meter to check the following connections:\nCP leak sensor: connector J18 to U1031 pin 1.\nQD leak sensor: connector J125 to U1031 pin 2."
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-012",
    "station": "FLB",
    "code": "028001006_078-000-0-000000000070",
    "name": "xxxx:xx:xx.x Validation failed for device /dev/mst/mtxxxx_pciconf1 (BDF xxxx:xx:xx.x), Port 8: Width mismatch: expected xxX, got xxX Port Mapping GB200 with CX7, mlx port mapping (0000 and 2000 models) Left side of tray Right side of tray CX7 mlx5_0, mlx5_1 mlx5_4, mlx5_5 BF3 mlx5_2, mlx5_3 mlx5_6, mlx5_7 GB200 with CX8, mlx port mapping (3000 and 3100 models) Left side of tray Right side of tray CX8 mlx5_0, mlx5_1 mlx5_2, mlx5_3 BF3 mlx5_4, mlx5_5 GB300 with CX8, mlx port mapping (3000 model) Left side of tray Right side of tray CX8 mlx5_0, mlx5_1, mlx5_2, mlx5_3 mlx5_4, mlx5_5, mlx5_6, mlx5_7 BF3 mlx5_8, mlx5_9",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FLB",
    "steps": [
      {
        "title": "Use the mlx5 port numbers in the applicable table to identify the failed device type and side of the tray.",
        "detail": "Example: On a GB200 CX7 system, mlx5_0 and mlx5_1 identify the left-side CX7."
      },
      {
        "title": "Complete the applicable repair action:",
        "detail": "CX7 or CX8: Reseat the front-panel OSFP board and cables and both UltraPass cables. Inspect the\nOSFP board, UltraPass cables, and connectors for damage or bent pins.\nBF3: Reseat the front-panel QSFP cable. BF3 does not use UltraPass cable connections. If the failure\nremains, replace the affected BF3."
      }
    ]
  },
  {
    "id": "PDF-MTF-013",
    "station": "FCT",
    "code": "028163006_000-000-0-000000000003, 028163006_000-000-0-000000000002",
    "name": "/dev/nvme1n1 (Generic): 19.1 Gbps (34.4% of max) - FAIL Timeout",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FCT",
    "steps": [
      {
        "title": "Reseat in the same MTF slot.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-014",
    "station": "FCT, FTS, FLB",
    "code": "054003006_1, 058018037_6266626966",
    "name": "SSH Operation XXXXX sftp failed",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FCT, FTS, FLB",
    "steps": [
      {
        "title": "Check the Host RJ45 cable.",
        "detail": "Ensure that the cable is securely connected."
      },
      {
        "title": "Retest FCT in the same MTF slot up to three times.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-015",
    "station": "IOT",
    "code": "033019037_1, 033027006_017-000-0-000000000001",
    "name": "033019037_1: Not available 033027006_017-000-0-000000000001: BMC_IOBoard0CX80Temp Sensor value calculation exception: Exception('Could not find sensor with key: BMC_IOBoard0CX80Temp')",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · IOT",
    "steps": [
      {
        "title": "Re-seat the system in the same MTF slot.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-016",
    "station": "IOT, FTS",
    "code": "033026006_009-001-1-000000000140",
    "name": "NVLink_CC 0019:01:00.0 - Fail to enter HS Mode on NvLink 3 Found 5e-06, exceeded threshold 1e-07 user aborted the script",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · IOT, FTS",
    "steps": [
      {
        "title": "AC cycle.",
        "detail": ""
      },
      {
        "title": "Inspect for damage.",
        "detail": "Remove the compute tray from the MTF.\nCheck for visible damage on the compute tray and backplane."
      },
      {
        "title": "Change MTF location.",
        "detail": "Move the compute tray to a different MTF location.\nDetermine whether the failure moves with the compute tray or remains in the original MTF location.\nIf the failure doesn't follow the compute tray:\nReplace the loopback cable causing the failure in the original MTF location."
      },
      {
        "title": "Replace the Bianca board causing the failure.",
        "detail": "If the failure moves with the compute tray and the retest fails two times, identify whether the failure\noriginates from the primary or secondary Bianca board.\nReplace the Bianca board causing the failure.\nPlace the failed Bianca board in the bonepile for replacement of the NVLink connector(s)\ncorresponding to the failed link."
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-017",
    "station": "IOT",
    "code": "033027006_017-000-0-000000000001",
    "name": "AMBER error: mlx5_X failed BER criteria: Effective_BER = XXXX",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · IOT",
    "steps": [
      {
        "title": "Move the tray to a different MTF slot.",
        "detail": "Use a different set of OSFP loopback cables."
      },
      {
        "title": "Re-seat the Ultrapass cables for the specific port.",
        "detail": ""
      },
      {
        "title": "Replace the OSFP board for the specific port.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": "Reference Tables\nGB200 with Cx7, mlx port mapping (0000 and 2000 models)\nComponent          Left side of tray   Right side of tray\nCx7                mlx5_0, mlx5_1      mlx5_4, mlx5_5\nBF3                mlx5_2, mlx5_3      mlx5_6, mlx5_7\nGB200 with Cx8, mlx port mapping (3000 and 3100 models)\nComponent          Left side of tray   Right side of tray\nCx8                mlx5_0, mlx5_1      mlx5_2, mlx5_3\nBF3                                    mlx5_4, mlx5_5\nGB300 with Cx8, mlx port mapping (3000 model)\nComponent          Left side of tray                        Right side of tray\nCx8                mlx5_0, mlx5_1, mlx5_2, mlx5_3           mlx5_4, mlx5_5, mlx5_6, mlx5_7\nBF3                                                         mlx5_8, mlx5_9"
      }
    ]
  },
  {
    "id": "PDF-MTF-018",
    "station": "PRET",
    "code": "03893d162e461ab7",
    "name": "Display string as an output. [TC] PCI - Check PCIe Device Name By MST (GB NVL) (Compute Tray - BlueField DPU (Right))",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · PRET",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Reflash M.2 and BF3.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-019",
    "station": "FLB",
    "code": "7cba26cea4d171b1",
    "name": "Look for \"Compute Tray BlueField3 Left BMC IP Address\" IP.... Look for 'Compute Tray BlueField3 Right BMC IP Address' IP....",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FLB",
    "steps": [
      {
        "title": "AC cycle.",
        "detail": "Run the BAT script."
      },
      {
        "title": "Reset the BF3 settings.",
        "detail": "Access the BMC host and run:\nsudo mst start\nsudo mlxconfig -d /dev/mst/mt41692_pciconf0 -y s INTERNAL_CPU_MODEL=1\nINTERNAL_CPU_OFFLOAD_ENGINE=0\nsudo mst restart\nRun diagnostics starting at FLA.\nSee IMAGE_028 in the Reference Images section below."
      },
      {
        "title": "Check the BF3 power-cable and network-cable connections.",
        "detail": "Check the BF3 network cable at the front of the tray.\nRemove the tray top cover.\nCheck the power-cable connection to the riser card.\nCheck the power-cable connection to the BF3.\nConfirm that both power cables are connected. See IMAGE_029 in the Reference Images section\nbelow."
      },
      {
        "title": "Re-seat the PCIe riser cable.",
        "detail": "Confirm that the PCIe riser cable is fully seated and that there are no loose connections."
      },
      {
        "title": "Check the BF3 MAC address.",
        "detail": "Confirm that the physical MAC address matches the SFC MAC address.\nReplace BF3 if MAC does not match"
      },
      {
        "title": "Replace the BF3.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-020",
    "station": "FTS, IOT",
    "code": "033027006_017-000-0-000000000009",
    "name": "Device 'mlx5_x' is not in valid HW state (Bad/unsupported EEPROM) Device 'mlx5_x' is not in valid HW state (Bad signal integrity) Device 'mlx5_x' is not in valid HW state (Negotiation failure) Device 'mlx5_x' is not in valid HW state (Cable is unplugged)",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FTS, IOT",
    "steps": [
      {
        "title": "AC cycle.",
        "detail": ""
      },
      {
        "title": "Inspect and re-seat the OSFP loopback cable and both ends of the OSFP sideband cable.",
        "detail": "Ensure that the OSFP loopback cable is fully seated.\nFor mlx5_0 or mlx5_1, service the primary-side CX7 I/O board and OSFP board.\nFor mlx5_4 or mlx5_5, service the secondary-side CX7 I/O board and OSFP board.\nRemove BlueField3 to access the OSFP board connection."
      },
      {
        "title": "Re-seat the UltraPass connectors and cable assembly.",
        "detail": "Inspect the connectors and ensure they are fully seated.\nConfirm that the stiffener bracket is tightened to the required torque specification."
      },
      {
        "title": "Replace the OSFP sideband cable.",
        "detail": ""
      },
      {
        "title": "Replace the UltraPass cable assembly.",
        "detail": ""
      },
      {
        "title": "Replace the OSFP module.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-021",
    "station": "FTS",
    "code": "054001006_4",
    "name": "CX7_PORT - Command '['sudo mlxconfig -d 0010:03:00.0 -y set LINK_TYPE_P1=2']' returned non-zero exit status 3. Comment: CX7 board, PCIe port",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FTS",
    "steps": [
      {
        "title": "AC cycle.",
        "detail": "Run the BAT script."
      },
      {
        "title": "Reconfigure the CX7.",
        "detail": "Access the BMC host.\nFrom the host, run:\nsudo mst start\nsudo mst restart\nsudo mlxconfig -d 0010:03:00.0 -y set LINK_TYPE_P1=2\nRun diagnostics starting at FLA."
      },
      {
        "title": "Re-seat the CX7 board associated with the PCIe port reported in the error description.",
        "detail": ""
      },
      {
        "title": "Replace the CX7 board associated with the PCIe port reported in the error description.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-022",
    "station": "FTS",
    "code": "054003006_1",
    "name": "system powered off",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FTS",
    "steps": [
      {
        "title": "AC cycle.",
        "detail": ""
      },
      {
        "title": "Inspect the PDB, PDB cables, and Biancas.",
        "detail": ""
      },
      {
        "title": "Reseat the PDB.",
        "detail": ""
      },
      {
        "title": "Replace the PDB.",
        "detail": ""
      },
      {
        "title": "Move to Second-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-023",
    "station": "FTS, AST, PRET, FLB",
    "code": "054003006_2, NDBG_031, 023002006_na, 058018036_6266336666, 058018006_558",
    "name": "Not available, stored as na (054003006_2) Cable roto (NDBG_031) na (023002006_na) Unable to detect NVLink 2 Check the power status is on. ( Power status is not on. Check the device. ) [TC] System - Power On Compute Tray Host by ipmitool in Remote Server (GB NVL) Unable to detect HMC Could not extract TPM firmware version from dmidecode output",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FTS, AST, PRET, FLB",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-024",
    "station": "FCT",
    "code": "054018006_000-000-1-000000000317, 055004006_000-000-1-000000000194",
    "name": "GPU2_00XX:06:00.0 Found memory error type \"UNCORR\" in \"FB\". Found memory error type \"MISC\" in \"FB\". Found memory error type \"SBE\" in \"FB\" Found memory error type \"DBE\" in \"FB\"",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FCT",
    "steps": [
      {
        "title": "AC cycle.",
        "detail": "Run the BAT script.\nRun diagnostics starting at FLA."
      },
      {
        "title": "Re-seat the affected Bianca and all associated cables.",
        "detail": ""
      },
      {
        "title": "Replace the affected Bianca.",
        "detail": "Follow the PCIe direction reported in the error description to identify the affected Bianca."
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-025",
    "station": "FTS",
    "code": "054018006_000-000-1-020000610139, 054018006_015-000-1-020000610139, 098011006_009-001-1-020000610139",
    "name": "Acceptable temperature limits exceeded or the thermal sensor is broken or miscalibrated",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FTS",
    "steps": [
      {
        "title": "Perform a visual inspection to check for damage to the coldplate sensors.",
        "detail": ""
      },
      {
        "title": "Remove and inspect the cold plate.",
        "detail": "Remove the cold plate according to the applicable SOP.\nCheck whether any plastic protective covers were left on the cold plate.\nVerify that TIM was applied to all required locations.\nCheck the failing mods.log BDF to identify the affected Bianca.\nBoth Biancas may require inspection and TIM replacement."
      },
      {
        "title": "Clean and reapply TIM.",
        "detail": "Remove any remaining protective covers.\nClean the cold plate and mating surfaces.\nReapply TIM according to the SOP and the locations shown in the assembly guide."
      },
      {
        "title": "Perform TIM baking.",
        "detail": "Bake using the liquid heating method SOP.\nRetest is to start at the beginning of Diags [FLA]."
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-026",
    "station": "FTS",
    "code": "054018006_015-000-1-0-000-00-624-139, 054018006_015-000-1-020000610139",
    "name": "GPUX_XXX:XX:XX.X Acceptable temperature limits exceeded or the thermal sensor is broken or miscalibrated GPUX_XXXX:XX:XX.X Temperature above specified limit",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FTS",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Inspect the cold plate associated with the failing GPU.",
        "detail": "Check the cold plate for damage to the sensor pads.\nUse TAS.txt log to verify which GPU is exceeding the temperature limits"
      },
      {
        "title": "Inspect both leak-sensor cables.",
        "detail": "Check the continuity of the leak-sensor wires at J125 and J18."
      },
      {
        "title": "Inspect the thermal pads/TIM beneath the cold plate for damage, contamination, misalignment, excessive",
        "detail": "reuse, or inadequate contact."
      },
      {
        "title": "Replace the affected thermal pads/TIM and reinstall the cold plate.",
        "detail": "Ensure the system goes through the TIM BAKE station properly."
      },
      {
        "title": "Replace the affected cold-plate assembly.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-027",
    "station": "FTS",
    "code": "054018006_015-000-1-000000000097",
    "name": "NETIR_LINK_EVT Fatal XC0 i0 Link 17 (0x000625c6 0x00000000 0x00000000 0x00000000 0x00000000 0x00000000) NETIR_LINK_EVT Fatal XC0 i0 Link 16 (0x000605c6 0x00000000 0x00000000 0x00000000 0x00000000 0x00000000)",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FTS",
    "steps": [
      {
        "title": "Reseat the NVLink loopback cable.",
        "detail": ""
      },
      {
        "title": "Replace the NVLink loopback cable.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-028",
    "station": "FTS, FCT",
    "code": "054018006_048-000-0-000000000106, 028001006_048-000-0-000000000106",
    "name": "FRU_BF3_FRU_LIST_1_FRU_Device_Description 'FRU_BF3_FRU_LIST_1_FRU_Device_Description': not found. expected '=/BlueField-3 DPU/'",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FTS, FCT",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Reflash the failed BF3, then AC Cycle.",
        "detail": ""
      },
      {
        "title": "Reseat the failed BF3.",
        "detail": ""
      },
      {
        "title": "Reseat the failed BF3 riser cable.",
        "detail": ""
      },
      {
        "title": "Replace the failed BF3.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-029",
    "station": "FTS, FCT",
    "code": "054018006_048-000-0-000000000107, 028001006_048-000-0-000000000107, 023001006_048-000-0-000000000107",
    "name": "SSD_xxxx_xx_xx_x_FW_Version 'SSD_xxxx_xx_xx_x_FW_Version': found 'F3MU010' expected '=/GDC6602Q|LDDJ3U2Q|F3MU011/' SSD_xxxx_xx_xx_x_FW_Version 'SSD_xxxx_xx_xx_x_FW_Version': found 'GDC7402Q' expected '=/GDC7502Q|E2MU200/' SSD_00xx_xx_xx_x_FW_Version 'SSD_00xx_xx_00_0_FW_Version': found 'F3MU010' expected '=/LEDJ0U22|LDDJ3U2Q|F3MU011/'",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FTS, FCT",
    "steps": [
      {
        "title": "AC cycle.",
        "detail": ""
      },
      {
        "title": "Install the expected/required version.",
        "detail": ""
      },
      {
        "title": "Replace the failed SSD.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-030",
    "station": "FTS",
    "code": "054018006_048-000-0-000000000086",
    "name": "NUMA_NODE0_CPU 'NUMA_NODE0_CPU': found '0-xx' expected '0-xx'",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FTS",
    "steps": [
      {
        "title": "AC cycle.",
        "detail": "Run the BAT script."
      },
      {
        "title": "Set ActiveCores to 144.",
        "detail": "Log into the SUT from the ETF or MTF server where the unit is located:\nBMC_USER=\"admin\"\nBMC_PASSWORD=\"Nvidia0penBmc2025!\"\nBMC_IP=\"<BMC_IP_ADDRESS>\"\nIf the login credentials above are incorrect, use the below:\nBMC_USER=\"root\"\nBMC_PASSWORD=\"0penBmc\"\nBMC_IP=\"<BMC_IP_ADDRESS>\"\nRun: $curl -k -u BMC_USER:BMC_PASSWORD -H \"Content-Type: application/json\" -\nX PATCH -d '{\"Attributes\": {\"ActiveCores\": 144}}'\nhttps://$BMC_IP/redfish/v1/Systems/System_0/Bios/Settings\nSee image below for an example of a successful response.\nValidate the change from the host by running lscpu\nAC Cycle"
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-031",
    "station": "FTS, FCT",
    "code": "054018006_051-000-0-000000000050, 028001006_051-000-0-000000000050",
    "name": "Dump BF3_1 BMC virtual registers I2C I2C_Failure - Dump_BF3_1_BMC_virtual_registers Check failed Dump BF3_0 BMC virtual registers I2C I2C_Failure - Dump_BF3_0_BMC_virtual_registers Check failed",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FTS, FCT",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Reassemble the failed BF bay.",
        "detail": ""
      },
      {
        "title": "Replace the associated IPEX boards.",
        "detail": ""
      },
      {
        "title": "Swap the Bianca boards.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-032",
    "station": "FTS, FCT",
    "code": "054018006_051-000-0-000000000050, 028001006_051-000-0-000000000050",
    "name": "Read IPEX_1 (S8B) CPLD FW version I2C I2C_Failure - Read_IPEX_1_(S8B)_CPLD_FW_version Check failed",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FTS, FCT",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Reseat all IPEX connections.",
        "detail": ""
      },
      {
        "title": "Replace IPEX cables.",
        "detail": ""
      },
      {
        "title": "Replace IPEX board.",
        "detail": ""
      },
      {
        "title": "Replace connected OSFP board.",
        "detail": ""
      },
      {
        "title": "Replace connected Bianca board.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-033",
    "station": "FTS",
    "code": "054018006_051-000-0-000000000050",
    "name": "Read HDD BP_0 (S8B) CPLD FW version I2C I2C_Failure - Read_HDD_BP_0_(S8B)_CPLD_FW_version Check failed",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FTS",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Reseat the primary IPEX bridge board and its associated cables.",
        "detail": ""
      },
      {
        "title": "Reseat the primary-side cables.",
        "detail": ""
      },
      {
        "title": "Replace the primary-side cables.",
        "detail": ""
      },
      {
        "title": "Replace the primary IPEX bridge board.",
        "detail": ""
      },
      {
        "title": "Replace the primary E1.S backplane (HDD_BP_0).",
        "detail": ""
      },
      {
        "title": "Replace the primary Bianca board.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-034",
    "station": "FCT, FTS",
    "code": "028001006_051-000-0-000000000050, 054018006_051-000-0-000000000050",
    "name": "I2C I2C_Failure - Getting_xxx_Bianca_AINy_ADC_reading Check failed. Out of range in BMC returned data on Getting Primary Bianca AIN0 ADC reading. Retrieved value = ['0x90', '0x00']. Normalized value = 0.0. Expected range = [0.5, 0.55], I2C I2C_Failure - Getting_Primary_Bianca_AIN0_ADC_reading Check failed. Getting Primary Bianca AIN0 ADC reading Out of range in BMC returned data on Getting Primary Bianca AIN0 ADC reading. Retrieved value = 0.0. Normalized value = 0.0. Expected range = [0.5, 0.55], I2C I2C_Failure - Getting_Primary_Bianca_AIN0_ADC_reading Check failed. Getting Primary Bianca AIN0 ADC reading I2C I2C_Failure - Getting_Primary_Bianca_AIN0_ADC_reading Check failed. Fail Message (MODS.log/tas.txt): Primary/Secondary Bianca AIN0 ADC reading Out of range. Note: AIN0 ADC indicates the cold plate leak sensor, while AIN1 ADC indicates the quick disconnect leak sensor.",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FCT, FTS",
    "steps": [
      {
        "title": "AC cycle.",
        "detail": "Retest FTS/FCT."
      },
      {
        "title": "Review the generated error description.",
        "detail": "If the error is I2C I2C_Failure - Getting_xxx_Bianca_AINy_ADC_reading Check\nfailed, proceed to Step 3.\nIf the error description includes measurement values, proceed to Step 4 and complete its substeps."
      },
      {
        "title": "Re-seat the BMC and HMC, along with their cables.",
        "detail": "Replace the BMC if the failure persists.\nMove to second-level FA if failure persists."
      },
      {
        "title": "Inspect the cold plate identified by the error code.",
        "detail": "Check the leak sensor for physical damage.\nConfirm that the leak sensor is not touching the cold plate. See IMAGE_035 below."
      }
    ]
  },
  {
    "id": "PDF-MTF-035",
    "station": "FTS",
    "code": "054018006_015-000-1-000000000097",
    "name": "NETIR Fatal XC0 i0 Link -1 (0x000fe406 0x00000000 0x00000000 0x00000000 0x00000000 0x00000000) Not Available (\"Cannot find Onediag Final Result. Check log for details.\")",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FTS",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-036",
    "station": "RIN",
    "code": "055004006_015-000-0-000000000009",
    "name": "An Exception occurred in thermal ssd test. See ssd_exception.log",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · RIN",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Reseat the failed SSD.",
        "detail": ""
      },
      {
        "title": "Swap the failed SSD.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-037",
    "station": "RIN",
    "code": "055010006_2",
    "name": "na",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · RIN",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Reseat the power cables.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-038",
    "station": "FLB",
    "code": "058011037_4",
    "name": "Command sudo bash /tmp/mft_tool/mft*deb/install.sh --oem fails.",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FLB",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Reflash the M.2 and restart the BMC.",
        "detail": ""
      },
      {
        "title": "Reset the BMC.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-039",
    "station": "FLB",
    "code": "058018036_62666266",
    "name": "BF3 Update Failed.",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FLB",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Reseat the failed BF3 and its associated cables.",
        "detail": ""
      },
      {
        "title": "Replace the failed BF3.",
        "detail": ""
      },
      {
        "title": "Replace the failed BF3 cables.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-040",
    "station": "FLB",
    "code": "058018036_6E6F626633",
    "name": "na",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FLB",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-041",
    "station": "FLB",
    "code": "058072006_000-000-0-000000000001, 058072036_000-000-0-000000000001",
    "name": "Not able to get BMC IP address",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FLB",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Reseat the BMC, TPM, and their associated cables.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-042",
    "station": "FLB",
    "code": "058072037_74706626164",
    "name": "TPM DISABLED",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FLB",
    "steps": [
      {
        "title": "Reseat the TPM.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-043",
    "station": "NVL, FTS, IOT",
    "code": "098011006_009-001-1-000000000140, 054018006_000-000-1-000000000140, 033026006_009-001-1-000000000140",
    "name": "NVLink_CC 0019:01:00.0 - Fail to enter HS Mode on NvLink 3 / Found 5e-06, exceeded threshold 1e-07 Found Xe-06, exceeded threshold 1e-0X, 4x19 connector 3, Column 11, Found 3e-06, exceeded threshold 1e-07, 4x19 connector 3, Column 11 NVLink_CC 0019:01:00.0 - Fail to enter HS Mode on NvLink 3 /Found 5e-06, exceeded threshold 1e-07",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · NVL, FTS, IOT",
    "steps": [
      {
        "title": "AC cycle.",
        "detail": ""
      },
      {
        "title": "Inspect for damage.",
        "detail": "Remove the compute tray from the MTF.\nCheck for visible damage on the compute tray and backplane."
      },
      {
        "title": "Change the MTF location.",
        "detail": "Move the compute tray to a different MTF location.\nIf the failure stays in the original MTF location:\nReplace the loopback cable causing the failure in the original MTF location.\nIf the failure moves with the compute tray and the retest has failed twice:\nIdentify whether the failure originated from the primary or secondary Bianca board.\nReplace the failing Bianca board.\nPlace the failed Bianca board in the bonepile to replace the NVLink connector(s) corresponding\nto the failed link."
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-044",
    "station": "FLA",
    "code": "2ac92b0162253c7b, 5cc2d0183ca4ff66",
    "name": "Check 'BlueField-3 DPU SuperNIC (Right) - Board PN' is valid. ( Item invalid. Check SFC. ) [TC] ENV - Assign Crabber Variable From Assembly Data (GB NVL) (BlueField-3 DPU SuperNIC (Right) - Board PN)",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FLA",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Check the SFC system to ensure that the BF3 is properly married at the chassis and bay levels. The error",
        "detail": "usually occurs at the bay level."
      },
      {
        "title": "Check the IT system status using NVIDIA Reporter and review the DATABASE COMPONENT section. See",
        "detail": "IMAGE_026 below for an example of a correctly configured node."
      },
      {
        "title": "Based on the identified errors, complete the form in the Registros_FA_2026 file—or the provided form—",
        "detail": "replacing any information that needs to be updated."
      },
      {
        "title": "Send an email to IT and QE, and open a ticket so that the necessary changes can be made.",
        "detail": "Confirm system behavior starting at FLA."
      },
      {
        "title": "Replace BF3",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": "Reference Image"
      }
    ]
  },
  {
    "id": "PDF-MTF-045",
    "station": "FLA",
    "code": "2c8bd1a67df0283c",
    "name": "Check \"Compute Tray - BMC Board - BMC 1GbE Port IP Address\" IP connection. ( Connection is not stable. Check the cable & LED. ) [TC] ENV - Generate IP Address File From MAC Address File (GB NVL) (...) Look for \"Compute Tray BMC\" IP. ( Failed to find IP. Check the cable & LED. Might need to AC cycle. ) [TC] ENV - Generate IP Address File From MAC Address File (GB NVL) (Compute Tray BMC)",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FLA",
    "steps": [
      {
        "title": "Move the system to a second MTF location.",
        "detail": ""
      },
      {
        "title": "Inspect and reseat the BMC, BMC interposer, and associated cables.",
        "detail": ""
      },
      {
        "title": "Replace the BMC interposer.",
        "detail": ""
      },
      {
        "title": "Replace BMC.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-046",
    "station": "PRET",
    "code": "34f20087519ddbd5",
    "name": "Write 'Compute Tray - OSFP Board (Left)' FRU EEPROM. ( Write Failed. Check I2C cable connection. ) [TC] FRU - Write FRU To PCBa by ipmitool raw script (GB NVL) (Compute Tray - OSFP Board (Left))",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · PRET",
    "steps": [
      {
        "title": "Reseat the left OSFP board and its associated connections.",
        "detail": ""
      },
      {
        "title": "Replace the left OSFP board cables.",
        "detail": ""
      },
      {
        "title": "Replace the left OSFP board.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-047",
    "station": "PRET",
    "code": "3ed6b39676100db0",
    "name": "Show 'Compute Tray - BlueField DPU (Right)' mst status. ( Show status failed. Check the device connection. ) [TC] PCI - Check PCIe Device Name By MST (GB NVL) (Compute Tray - BlueField DPU (Right))",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · PRET",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Reseat the right BF3 riser cables, riser, and BF3 card.",
        "detail": ""
      },
      {
        "title": "Replace the right BF3 board.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-048",
    "station": "PRET",
    "code": "5012438336df8300, 430bd9419a574429",
    "name": "Write 'Compute Tray - IPEX Bridge Board (Left)' FRU EEPROM. ( Write Failed. Check I2C cable connection. ) [TC] FRU - Write FRU To PCBa by ipmitool raw script (GB NVL) (Compute Tray - IPEX Bridge B... Write 'Compute Tray - IPEX Bridge Board (Right)' FRU EEPROM. ( Write Failed. Check I2C cable connection. ) [TC] FRU - Write FRU To PCBa by ipmitool raw script (GB NVL) (Compute Tray - IPEX Bridge ...",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · PRET",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Inspect and reseat the associated IPEX cables. Replace any cable that is physically damaged.",
        "detail": ""
      },
      {
        "title": "Replace the associated riser, black-and-white cables, and IPEX cables.",
        "detail": ""
      },
      {
        "title": "Replace the BMC board.",
        "detail": ""
      },
      {
        "title": "Replace the associated BlueField-3 DPU.",
        "detail": ""
      },
      {
        "title": "Replace the associated Bianca board.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-049",
    "station": "FLB, RIN",
    "code": "3a7ca475c97765c9",
    "name": "\"Look for \"Compute Tray BlueField3 Right BMC IP Address\" IP. ( Failed to find IP. Check the cable & LED. Might need to AC cycle. ) [TC] ENV - Generate IP Address File From MAC Address File (GB NVL)...\" \"Check \"Compute Tray BlueField3 Right BMC IP Address\" IP connection. ( Connection is not stable. Check the cable & LED. ) [TC] ENV - Generate IP Address File From MAC Address File (GB NVL) (Compute...\"",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · FLB, RIN",
    "steps": [
      {
        "title": "AC cycle.",
        "detail": "Run the BAT script."
      },
      {
        "title": "Reset the BF3 settings.",
        "detail": "Access the BMC host.\nRun sudo mst start.\nRun sudo mlxconfig -d /dev/mst/mt41692_pciconf0 -y set INTERNAL_CPU_MODEL=1\nINTERNAL_CPU_OFFLOAD_ENGINE=0.\nRun sudo mst restart.\nRun diagnostics starting at FLA."
      },
      {
        "title": "Re-seat the BF3, BF3 riser, and all associated cables.",
        "detail": ""
      },
      {
        "title": "Check the BF3 MAC address.",
        "detail": "Confirm that the physical MAC address matches the SFC MAC address.\nIf the addresses do not match, replace the BF3."
      },
      {
        "title": "Replace BF3.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-050",
    "station": "PRET",
    "code": "7423ca5c6b563199",
    "name": "'Compute Tray Host' boot to UEFI Interactive Shell. ( Host is not boot properly. Check the OS in SSD. ) [TC] System - Device Login To Host Using SOL (GB NVL) 'Compute Tray Host' host is not boot properly. ( Check the device. ) [TC] System - Device Login To Host Using SOL (GB NVL)",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · PRET",
    "steps": [
      {
        "title": "AC cycle.",
        "detail": ""
      },
      {
        "title": "Reflash the M.2.",
        "detail": ""
      },
      {
        "title": "Inspect and Replace the M.2 card and bracket.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-051",
    "station": "PRET",
    "code": "8b403354da1a0397",
    "name": "Write 'Compute Tray - OSFP Board (Right)' FRU EEPROM. ( Write Failed. Check I2C cable connection. ) [TC] FRU - Write FRU To PCBa by ipmitool raw script (GB NVL) (Compute Tray - OSFP Board (Right)) Ping 'OSFP Board (Right)' FRU EEPROM. ( Ping Failed. Check I2C cable connection. ) [TC] FRU - Write FRU To PCBa by ipmitool raw script (OSFP) (OSFP Board (Right))",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · PRET",
    "steps": [
      {
        "title": "Reseat the right OSFP board and its associated connections.",
        "detail": ""
      },
      {
        "title": "Replace the right OSFP board sideband cable (J1).",
        "detail": ""
      },
      {
        "title": "Replace the right OSFP board.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-052",
    "station": "PRET, FLB",
    "code": "9270ffbcafb562c6",
    "name": "Look for \"Compute Tray - BlueField DPU (Left) - BMC 1GbE Port IP Address\" IP. ( Failed to find IP. Check the cable & LED. Might need to AC cycle. ) [TC] ENV - Generate IP Address File From MAC Address File (...)",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · PRET, FLB",
    "steps": [
      {
        "title": "AC Cycle.",
        "detail": ""
      },
      {
        "title": "Reseat the left riser, BlueField-3 DPU, and all associated cables.",
        "detail": ""
      },
      {
        "title": "Replace the left riser cables.",
        "detail": ""
      },
      {
        "title": "Replace the left BlueField-3 DPU.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-053",
    "station": "PRET",
    "code": "bf0c1f22dc7352b0",
    "name": "Check 'Compute Tray - 1Gb NIC' PCIe device name. ( PCIe device name incorrect. Check the device. ) [TC] PCI - Check PCIe Device Name (Compute Tray - 1Gb NIC)",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · PRET",
    "steps": [
      {
        "title": "Reseat the 1Gb NIC, BMC, HMC, and their associated cables.",
        "detail": ""
      },
      {
        "title": "Replace the BMC interposer and its MCIO cable from BMC interposer J4 to HMC J22.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  },
  {
    "id": "PDF-MTF-054",
    "station": "OBA",
    "code": "NVCD_033",
    "name": "Sunken buttons",
    "components": "Procedimiento FFDG PDF",
    "flowchart": "FFDG PDF · OBA",
    "steps": [
      {
        "title": "Reseat and secure the sunken central-bay buttons.",
        "detail": ""
      },
      {
        "title": "Reassemble the I/O board.",
        "detail": ""
      },
      {
        "title": "Move to Secondary-Level FA.",
        "detail": ""
      }
    ]
  }
];
